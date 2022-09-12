import { createContext } from "react";
import { BagItem } from "./businessLogic/BagItem";
import { useBagState } from "./hooks/useBagState";

interface BagContext {
  addToBag?: (id: string) => void;
  lineItems: BagItem[];
  checkout?: () => void;
  checkoutDisabled: boolean;
  updateItem?: ({ id, pricePerItem, quantity }: BagItem) => void;
  totalCost: number;
}
const defaultBagContext: BagContext = {
  lineItems: [],
  checkoutDisabled: true,
  totalCost: 0,
};

export const BagContext = createContext(defaultBagContext);

export const BagContextProvider = ({ ...props }) => {
  const bag = useBagState();
  return <BagContext.Provider value={bag} {...props} />;
};
