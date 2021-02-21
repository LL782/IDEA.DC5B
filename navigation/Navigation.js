import { MdShoppingCart } from "react-icons/md";
import { displayPrice } from "../bag/displayPrice";
import { useBag } from "../bag/useBag";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const { checkout, checkoutDisabled, totalCost } = useBag();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a href="/" className={styles.homeLink}>
          DC5B Shop
        </a>

        <button
          className={styles.miniBag}
          onClick={checkout}
          disabled={checkoutDisabled}
        >
          {displayPrice(totalCost)} <MdShoppingCart />
        </button>
      </div>
    </nav>
  );
};
