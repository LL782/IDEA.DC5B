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

export const useBagState = () => {
  const [bag, updateBag] = useState(defaultBag);

  useEffect(() => {
    const bagFromStorage = window.localStorage.getItem("SHOP_DC5B_BAG");
    const data = bagFromStorage && JSON.parse(bagFromStorage);
    if (data) {
      updateBag(data);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(bag);
    window.localStorage.setItem("SHOP_DC5B_BAG", data);
  }, [bag]);

  const bagItems: BagItems = Object.keys(bag.items)
    .map((key) => {
      const originalBagItem = bag.items[key];
      const idea = findIdeaFromBagItem(key);

      return {
        ...originalBagItem,
        maxQuantity: idea?.maxQuantity || 0,
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

    if (items[id]) {
      items[id].quantity++;
    } else {
      items[id] = { id, quantity: 1 };
    }

    updateBag({ ...prevBag, items: items });
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

    updateBag({ ...prevBag, items });
  };

  const checkout = () => {
    const lineItems = bagItems.map(({ id, quantity }) => {
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
