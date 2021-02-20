import { MdShoppingCart } from "react-icons/md";
import { displayPrice } from "../bag/displayPrice";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const totalCost = 0.5;

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.homeLink}>
        DC5B Shop
      </a>

      <button className={styles.miniBag}>
        {displayPrice(totalCost)} <MdShoppingCart />
      </button>
    </nav>
  );
};
