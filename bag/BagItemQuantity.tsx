import { ChangeEvent } from "react";

import { useBag } from "./useBag";

export const BagItemQuantity = ({ bagItem }) => {
  const { id, quantity, maxQuantity = 5 } = bagItem;
  const { updateItem } = useBag();

  const handleQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = Number.parseInt(e.target.value);
    updateItem({ id, quantity: newQuantity });
  };

  const options = [];
  for (let i = 0; i <= maxQuantity; i++) {
    options.push(<option value={i} key={i}>{`${i}`}</option>);
  }

  return (
    <select value={quantity} onChange={handleQuantity}>
      {options}
    </select>
  );
};
