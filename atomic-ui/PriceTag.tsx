import styles from "../styles/Home.module.css";
import { displayPrice } from "../shoppingBag/businessLogic/displayPrice";

interface Props {
  price?: { amount: number };
  type: string;
}

export const PriceTag = ({ price, type }: Props) => (
  <p className={styles.price}>
    {displayPrice(price?.amount)}{" "}
    <span className={styles.priceType}>{type}</span>
  </p>
);
