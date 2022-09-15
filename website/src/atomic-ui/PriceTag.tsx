import styles from "./PriceTag.module.css";
import { displayPrice } from "../shoppingBag/businessLogic/displayPrice";

interface Props {
  price?: { amount: number };
  type: string;
}

const Price = ({ price }: { price?: { amount: number } }) =>
  !price ? null : (
    <span className={styles.displayPrice}>{displayPrice(price.amount)} </span>
  );

export const PriceTag = ({ price, type }: Props) => {
  return (
    <p className={styles.price}>
      <Price price={price} />
      <span className={styles.priceType}>{type}</span>
    </p>
  );
};
