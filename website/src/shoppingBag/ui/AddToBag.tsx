import type { PricedProduct } from "../../productIdeas/businessLogic/Idea";
import { BagItem } from "../businessLogic/BagItem";
import { PrimaryButton } from "../../atomic-ui/PrimaryButton";
import { useBagToolkit } from "../hooks/useBagToolkit";
import styles from "./AddToBag.module.css";
import { DEFAULT_MAX_QUANTITY } from "../businessLogic/defaults";
import { noteButtonClick } from "../../webActions/noteButtonClick";

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
  id: PricedProduct["id"];
  price?: PricedProduct["price"];
  maxQuantity?: PricedProduct["maxQuantity"];
}

export const AddToBag = (props: Props) => {
  const { maxQuantity = DEFAULT_MAX_QUANTITY, price } = props;

  if (!price) {
    return null;
  }
  if (maxQuantity === 0) {
    return <p className={styles.redDot}>Not available</p>;
  }

  return <AddToBagButton {...props} />;
};

const AddToBagButton = ({
  id,
  maxQuantity = DEFAULT_MAX_QUANTITY,
  price,
}: Props) => {
  const { addToBag, lineItems } = useBagToolkit();
  const bagItem = lineItems.filter(({ id }) => id === price?.id)[0];
  const maxedOut = bagItem?.quantity >= maxQuantity;

  const handleAdd = () => {
    if (!addToBag || !price) {
      return;
    }
    addToBag(price.id);
    noteAdd(id);
  };

  return (
    <PrimaryButton disabled={maxedOut} onClick={handleAdd}>
      <ButtonText bagItem={bagItem} maxedOut={maxedOut} />
    </PrimaryButton>
  );
};

function noteAdd(id: string) {
  noteButtonClick(`Add to bag`, id);
}
