import { useState, createContext, useContext, useEffect } from "react";
import type { BagItem } from "../@types";
import ideas from "../data/ideas";
import { initiateCheckout } from "../stripe/initiateCheckout";

type BagContextType = {
  addToBag?: ({ id }: { id: string }) => void;
  bagItems: BagItem[];
  checkout?: () => void;
  checkoutDisabled: boolean;
  updateItem?: ({ id, quantity }: { id: string; quantity: number }) => void;
  totalCost: number;
};

type BagItems = Array<BagItem>;

type confusing_duplicate_BagItems = {
  [key: string]: { id: string; quantity: number };
};

const defaultBag: {
  items: confusing_duplicate_BagItems;
} = {
  items: {},
};

export const BagContext = createContext<BagContextType>({
  bagItems: [],
  checkoutDisabled: true,
  totalCost: 0,
});

const DEFAULT_MAX_QUANTITY = 9;

export const useBagState = () => {
  const [bag, updateBag] = useState(defaultBag);

  const cleanAndUpdateBag = ({
    items: input,
  }: {
    items: confusing_duplicate_BagItems;
  }) => {
    console.log("cleanAndUpdateBag", input);
    const newKeys = Object.keys(input);
    console.log("newKeys:", newKeys);

    const availableItemIds = Object.keys(input).filter((key) => {
      console.log("key:", key);

      const result = ideas.some(({ price }) => price?.id === key);
      console.log("result:", result);

      return result;
    });
    console.log("availableItemIds:", availableItemIds);

    const cleanBag: confusing_duplicate_BagItems = availableItemIds.reduce(
      (bag, id) => {
        const { maxQuantity } = ideas.filter((i) => i.price?.id === id)[0];

        const newItem = {
          [id]: {
            id,
            quantity: Math.min(
              input[id].quantity,
              maxQuantity || DEFAULT_MAX_QUANTITY
            ),
          },
        };
        return { ...bag, ...newItem };
      },
      {}
    );
    updateBag({ items: cleanBag });
  };

  useEffect(() => {
    const bagFromStorage = window.localStorage.getItem("SHOP_DC5B_BAG");
    const data = bagFromStorage && JSON.parse(bagFromStorage);
    console.log("data", data);
    if (data) {
      cleanAndUpdateBag(data);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(bag);
    window.localStorage.setItem("SHOP_DC5B_BAG", data);
  }, [bag]);

  const bagItems: BagItems = Object.keys(bag.items)
    .map((key) => {
      console.log("bagItems key", key);
      const originalBagItem = bag.items[key];
      const idea = findIdeaFromBagItem(key);

      return {
        ...originalBagItem,
        maxQuantity: idea?.maxQuantity || DEFAULT_MAX_QUANTITY,
        pricePerItem: idea?.price?.amount || 0,
      };
    })
    .filter((a) => a !== undefined);

  const totalItems = bagItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  const checkoutDisabled = totalItems < 1;

  const totalCost = bagItems.reduce(
    (accumulator, { quantity, pricePerItem }) => {
      return accumulator + pricePerItem * quantity;
    },
    0
  );

  const addToBag = ({ id }: { id: string }) => {
    const prevBag = bag;
    const items = { ...bag.items };
    console.log("addToBag", id);

    if (items[id]) {
      items[id].quantity++;
    } else {
      items[id] = { id, quantity: 1 };
    }

    cleanAndUpdateBag({ ...prevBag, items: items });
  };

  const updateItem = ({ id, quantity }: { id: string; quantity: number }) => {
    const prevBag = bag;
    const items = { ...bag.items };

    if (items[id] && quantity === 0) {
      delete items[id];
    }

    if (items[id] && quantity) {
      items[id].quantity = quantity;
    }

    cleanAndUpdateBag({ ...prevBag, items });
  };

  const checkout = () => {
    const lineItems = bagItems.map(({ id, quantity }) => {
      console.log("checkout id", id);
      return { price: id, quantity };
    });

    initiateCheckout({ lineItems });
  };

  return {
    addToBag,
    bagItems,
    checkout,
    checkoutDisabled,
    updateItem,
    totalCost,
  };
};

export const useBag = () => {
  return useContext(BagContext);
};

function findIdeaFromBagItem(key: string) {
  return ideas.find(({ price: { id } = {} }) => id === key);
}
