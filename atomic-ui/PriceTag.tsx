import styles from "../styles/Home.module.css";
import { displayPrice } from "../bag/displayPrice";

export const PriceTag = ({ price, type }) => (
  <p className={styles.price}>
    {displayPrice(price.amount)}{" "}
    <span className={styles.priceType}>{type}</span>
  </p>
);
