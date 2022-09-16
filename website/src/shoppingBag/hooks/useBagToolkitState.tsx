import { useState, useEffect, Dispatch, SetStateAction } from "react";

import { BagItem } from "../businessLogic/BagItem";
import { DEFAULT_MAX_QUANTITY } from "../businessLogic/defaults";
import { products } from "../../productIdeas/data/ideas";
import usingStripe from "../checkout/usingStripe";

const BAG_KEY = "IDEA_DC5B_BAG";

type Items = { [key: string]: BagItem };
const defaultBag: { items: Items } = { items: {} };

export const useBagToolkitState = () => {
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

  const addToBag = (id: string) => {
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

  const lineItems: Array<BagItem> = convertToLineItems(bag.items);
  const totalItems = lineItems.reduce((t, { quantity }) => t + quantity, 0);

  return {
    addToBag,
    lineItems: lineItems,
    checkout: () => usingStripe({ bagItems: lineItems }),
    checkoutDisabled: totalItems < 1,
    updateItem,
    totalCost: lineItems.reduce(toTotalPrice, 0),
  };
};

const convertToLineItems = (bagItems: Items) =>
  Object.keys(bagItems)
    .map((key) => {
      const originalBagItem = bagItems[key];
      const idea = findIdeaFromBagItem(key);

      return {
        ...originalBagItem,
        maxQuantity: idea?.maxQuantity || DEFAULT_MAX_QUANTITY,
        pricePerItem: idea?.price?.amount || 0,
      };
    })
    .filter((a) => a !== undefined);

const toTotalPrice = (t: number, { quantity, pricePerItem }: BagItem): number =>
  t + pricePerItem * quantity;

const findIdeaFromBagItem = (key: string) =>
  products.find(({ price: { id } = {} }) => id === key);

const newBagItem = (id: string) => {
  const item = products.filter((i) => i.price?.id === id)[0];
  const pricePerItem = item.price?.amount || 0;
  return { id, quantity: 1, pricePerItem };
};

const cleanThen = (
  updateBag: Dispatch<SetStateAction<{ items: Items }>>,
  items: Items
) => {
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
};
