import { PrimaryButton } from "./PrimaryButton";
import { useBag } from "../bag/useBag";

export const AddToBag = ({ price }) => {
  const { addToBag, bagItems, updateItem } = useBag();
  const inBag = bagItems.some(({ id }) => id === price.id);
  const text = inBag ? "In the bag" : "Add to bag";

  const handleAdd = () =>
    inBag
      ? updateItem({ id: price.id, quantity: 1 })
      : addToBag({ id: price.id });

  return <PrimaryButton onClick={handleAdd}>{text}</PrimaryButton>;
};
