import { useState, createContext, useContext, useEffect } from "react";
import type { BagItem } from "../@types";
import ideas from "../data/ideas";
import { stripeCheckout } from "../adaptors/stripeCheckout";

interface BagContextType {
  addToBag?: ({ id }: { id: string }) => void;
  bagItems: BagItem[];
  checkout?: () => void;
  checkoutDisabled: boolean;
  updateItem?: ({}: BagItem) => void;
  totalCost: number;
}

type Items = { [key: string]: BagItem };

const defaultBag: {
  items: Items;
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

  interface CleanAndUpdateBag {
    items: Items;
  }

  const cleanAndUpdateBag = ({ items }: CleanAndUpdateBag) => {
    const availableItemIds = Object.keys(items).filter((key) =>
      ideas.some(({ price }) => price?.id === key)
    );

    const cleanBag: Items = availableItemIds.reduce((bag, id) => {
      const { maxQuantity } = ideas.filter((i) => i.price?.id === id)[0];

      const newItem = {
        [id]: {
          id,
          quantity: Math.min(
            items[id].quantity,
            maxQuantity || DEFAULT_MAX_QUANTITY
          ),
        },
      };
      return { ...bag, ...newItem };
    }, {});
    updateBag({ items: cleanBag });
  };

  useEffect(() => {
    const bagFromStorage = window.localStorage.getItem("SHOP_DC5B_BAG");
    const data = bagFromStorage && JSON.parse(bagFromStorage);
    if (data) {
      cleanAndUpdateBag(data);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(bag);
    window.localStorage.setItem("SHOP_DC5B_BAG", data);
  }, [bag]);

  const bagItems: Array<BagItem> = Object.keys(bag.items)
    .map((key) => {
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

    if (items[id]) {
      items[id].quantity++;
    } else {
      items[id] = newBagItem(id);
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
    stripeCheckout({ bagItems });
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

function newBagItem(id: string) {
  const item = ideas.filter((i) => i.price?.id === id)[0];
  const pricePerItem = item.price?.amount || 0;
  return { id, quantity: 1, pricePerItem };
}
