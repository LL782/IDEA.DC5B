import type { BagItem } from "../@types";
import { PrimaryButton } from "./PrimaryButton";
import { useBag } from "../bag/useBag";
import styles from "./AddToBag.module.css";

const NUMBER_WORD: { [key: number]: string } = {
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
};

interface ButtonTextProps {
  bagItem: BagItem;
  maxedOut: boolean;
}

const ButtonText = ({ bagItem, maxedOut }: ButtonTextProps) => {
  if (!bagItem) return <>Add to bag</>;
  if (bagItem.quantity === 1 && maxedOut) return <>Bagged 😃</>;
  if (bagItem.quantity === 1) return <>In the bag</>;
  if (maxedOut) return <>Maxed out 🎉</>;

  return (
    <>{`${NUMBER_WORD[bagItem.quantity] || bagItem.quantity} in the bag`}</>
  );
};

interface Props {
  price?: { amount: number; id: string };
  maxQuantity?: number;
}

export const AddToBag = ({ maxQuantity = 5, price }: Props) => {
  const { addToBag, bagItems } = useBag();
  const bagItem = bagItems.filter(({ id }) => id === price?.id)[0];
  const maxedOut = bagItem?.quantity >= maxQuantity;

  const handleAdd =
    addToBag && price ? () => addToBag({ id: price.id }) : () => {};

  if (maxQuantity === 0) return <p className={styles.redDot}>Not available</p>;

  return (
    <PrimaryButton disabled={maxedOut} onClick={handleAdd}>
      <ButtonText bagItem={bagItem} maxedOut={maxedOut} />
    </PrimaryButton>
  );
};
