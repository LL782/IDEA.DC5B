import { BagItem } from "../@types/Product";
import { PrimaryButton } from "./PrimaryButton";
import { useBag } from "../bag/useBag";

const NUMBER_WORD = { 2: "Two", 3: "Three", 4: "Four", 5: "Five" };

interface ButtonTextProps {
  bagItem: BagItem;
  maxedOut: boolean;
}

const ButtonText = ({ bagItem, maxedOut }: ButtonTextProps) => {
  if (!bagItem) return <>Add to bag</>;
  if (bagItem.quantity === 1 && maxedOut) return <>Last one in the bag 😃</>;
  if (bagItem.quantity === 1) return <>In the bag</>;
  if (maxedOut) return <>Maxed out 🎉</>;

  return (
    <>{`${NUMBER_WORD[bagItem.quantity] || bagItem.quantity} in the bag`}</>
  );
};

export const AddToBag = ({ maxQuantity = 5, price }) => {
  const { addToBag, bagItems } = useBag();
  const bagItem = bagItems.filter(({ id }) => id === price.id)[0];
  const maxedOut = bagItem?.quantity >= maxQuantity;

  const handleAdd = () => addToBag({ id: price.id });

  return (
    <PrimaryButton disabled={maxedOut} onClick={handleAdd}>
      <ButtonText bagItem={bagItem} maxedOut={maxedOut} />
    </PrimaryButton>
  );
};
