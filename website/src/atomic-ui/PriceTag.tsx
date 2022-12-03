import styles from "./PriceTag.module.css";
import { displayPrice } from "../shoppingBag/businessLogic/displayPrice";

interface Props {
  price?: { amount: number };
  soldOut?: boolean;
  type: string;
}

const Price = ({
  price,
  soldOut,
}: {
  price?: Props["price"];
  soldOut?: Props["soldOut"];
}) => {
  if (!price) return null;

  let className = styles.displayPrice;
  if (soldOut) className += ` ${styles.sold}`;

  return (
    <>
      <span className={className}>{displayPrice(price.amount)}</span>
      {soldOut && <span className={styles.soldText}>Sold</span>}
    </>
  );
};

export const PriceTag = ({ price, soldOut, type }: Props) => {
  return (
    <p className={styles.price}>
      <Price price={price} soldOut={soldOut} />
      <span className={styles.priceType}>{type}</span>
    </p>
  );
};
