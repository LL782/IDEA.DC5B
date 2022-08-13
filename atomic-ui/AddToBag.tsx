import { PrimaryButton } from "./PrimaryButton";
import { useBag } from "../bag/useBag";

export const AddToBag = ({ price }) => {
  const { addToBag, bagItems } = useBag();
  const bagItem = bagItems.filter(({ id }) => id === price.id)[0];
  const inBag = !!bagItem;
  const max = price.maxQuantity || 5;
  const maxedOut = bagItem?.quantity >= max;

  const handleAdd = () => addToBag({ id: price.id });

  const text = maxedOut ? "Maxed out" : inBag ? "In the bag" : "Add to bag";

  return (
    <PrimaryButton disabled={maxedOut} onClick={handleAdd}>
      {text}
    </PrimaryButton>
  );
};
