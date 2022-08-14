import { useState, createContext, useContext, useEffect } from "react";
import type { BagItem } from "../@types";
import ideas from "../data/ideas";
import { initiateCheckout } from "../stripe/initiateCheckout";

type BagContextType = {
  addToBag: ({ id }: { id: string }) => void;
  bagItems: BagItem[];
  checkout: () => void;
  checkoutDisabled: boolean;
  updateItem: ({ id, quantity }: { id: string; quantity: number }) => void;
  totalCost: number;
  totalItems: number;
};

const defaultBag = {
  items: {},
};

export const BagContext = createContext<BagContextType | null>(null);

export const useBagState = () => {
  const [bag, updateBag] = useState(defaultBag);

  useEffect(() => {
    const bagFromStorage = window.localStorage.getItem("dc5b_bag");
    const data = bagFromStorage && JSON.parse(bagFromStorage);
    if (data) {
      updateBag(data);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(bag);
    window.localStorage.setItem("dc5b_bag", data);
  }, [bag]);

  const bagItems = Object.keys(bag.items).map((key) => {
    const idea = ideas.find(({ price: { id } }) => id === key);
    return {
      ...bag.items[key],
      maxQuantity: idea.maxQuantity,
      pricePerItem: idea.price.amount,
    };
  });

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

  const addToBag = ({ id }) => {
    const prevBag = bag;
    const items = { ...bag.items };

    if (items[id]) {
      items[id].quantity++;
    } else {
      items[id] = { id, quantity: 1 };
    }

    updateBag({ ...prevBag, items: items });
  };

  const updateItem = ({ id, quantity }) => {
    const prevBag = bag;
    const items = { ...bag.items };

    quantity = parseInt(quantity);

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
    totalItems,
  };
};

export const useBag = () => {
  return useContext(BagContext);
};
