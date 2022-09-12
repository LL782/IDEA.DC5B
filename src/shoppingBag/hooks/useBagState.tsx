import { useState, useEffect, Dispatch, SetStateAction } from "react";

import { BagItem } from "../businessLogic/BagItem";
import { DEFAULT_MAX_QUANTITY } from "../businessLogic/defaults";
import { products } from "../../productIdeas/data/ideas";
import usingStripe from "../checkout/usingStripe";

const BAG_KEY = "SHOP_DC5B_BAG";

type Items = { [key: string]: BagItem };
const defaultBag: { items: Items } = { items: {} };

export const useBagState = () => {
  const [bag, updateBag] = useState(defaultBag);

  useEffect(() => {
    const bagFromStorage = window.localStorage.getItem(BAG_KEY);
    const data = bagFromStorage && JSON.parse(bagFromStorage);
    if (data) {
      cleanThen(updateBag, data.items);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(bag);
    window.localStorage.setItem(BAG_KEY, data);
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
    const items = { ...bag.items };

    if (items[id]) {
      items[id].quantity++;
    } else {
      items[id] = newBagItem(id);
    }

    cleanThen(updateBag, items);
  };

  const updateItem = ({ id, quantity }: { id: string; quantity: number }) => {
    const items = { ...bag.items };

    if (items[id] && quantity === 0) {
      delete items[id];
    }

    if (items[id] && quantity) {
      items[id].quantity = quantity;
    }

    cleanThen(updateBag, items);
  };

  const checkout = () => {
    usingStripe({ bagItems });
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

function findIdeaFromBagItem(key: string) {
  return products.find(({ price: { id } = {} }) => id === key);
}

function newBagItem(id: string) {
  const item = products.filter((i) => i.price?.id === id)[0];
  const pricePerItem = item.price?.amount || 0;
  return { id, quantity: 1, pricePerItem };
}

type UpdateBag = Dispatch<SetStateAction<{ items: Items }>>;

function cleanThen(updateBag: UpdateBag, items: Items) {
  const availableItemIds = Object.keys(items).filter((key) =>
    products.some(({ price }) => price?.id === key)
  );

  const cleanBag: Items = availableItemIds.reduce((bag, id) => {
    const { maxQuantity } = products.filter((i) => i.price?.id === id)[0];

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
}
