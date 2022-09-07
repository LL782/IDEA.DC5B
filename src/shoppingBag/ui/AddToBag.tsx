import type { Idea } from "productIdeas/businessLogic/Idea";
import { BagItem } from "../businessLogic/BagItem";
import { PrimaryButton } from "../../atomic-ui/PrimaryButton";
import { useBag } from "../ui/useBag";
import styles from "./AddToBag.module.css";
import { noteWebActions } from "../../webActions/storage/usingLocalStorage";
import { DEFAULT_MAX_QUANTITY } from "../businessLogic/defaults";

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
  id: Idea["id"];
  price?: Idea["price"];
  maxQuantity?: Idea["maxQuantity"];
}

export const AddToBag = ({
  id,
  maxQuantity = DEFAULT_MAX_QUANTITY,
  price,
}: Props) => {
  const { addToBag, bagItems } = useBag();
  const bagItem = bagItems.filter(({ id }) => id === price?.id)[0];
  const maxedOut = bagItem?.quantity >= maxQuantity;

  const handleAdd = () => {
    if (!addToBag || !price) {
      return;
    }
    addToBag({ id: price.id });
    noteAdd(id);
  };

  if (maxQuantity === 0) return <p className={styles.redDot}>Not available</p>;

  return (
    <PrimaryButton disabled={maxedOut} onClick={handleAdd}>
      <ButtonText bagItem={bagItem} maxedOut={maxedOut} />
    </PrimaryButton>
  );
};

function noteAdd(id: string) {
  noteWebActions({
    action: "Click button",
    buttonName: `Add to bag :: ${id}`,
  });
}
