import { useState, createContext, useContext, useEffect } from "react";
import products from "../data/products";
import { initiateCheckout } from "../stripe/initiateCheckout";

type BagContextType = {
  addToBag: ({ id }: { id: string }) => void;
  bagItems: any[];
  checkout: () => void;
  checkoutDisabled: boolean;
  updateItem: ({ id, quantity }: { id: string; quantity: number }) => void;
  totalCost: number;
  totalItems: number;
};

const defaultBag = {
  products: {},
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

  const bagItems = Object.keys(bag.products).map((key) => {
    const product = products.find(({ price: { id } }) => id === key);
    return {
      ...bag.products[key],
      pricePerItem: product.price.amount,
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
    const products = { ...bag.products };

    if (products[id]) {
      products[id].quantity++;
    } else {
      products[id] = { id, quantity: 1 };
    }

    updateBag({ ...prevBag, products });
  };

  const updateItem = ({ id, quantity }) => {
    const prevBag = bag;
    const products = { ...bag.products };

    quantity = parseInt(quantity);

    if (products[id] && quantity === 0) {
      delete products[id];
    }

    if (products[id] && quantity) {
      products[id].quantity = quantity;
    }

    updateBag({ ...prevBag, products });
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
