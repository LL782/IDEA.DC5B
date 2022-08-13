import { PrimaryButton } from "./PrimaryButton";
import { useBag } from "../bag/useBag";

export const AddToBag = ({ price }) => {
  const { addToBag } = useBag();

  const handleAdd = () => {
    addToBag({ id: price.id });
  };

  return <PrimaryButton onClick={handleAdd}>Add to bag</PrimaryButton>;
};
