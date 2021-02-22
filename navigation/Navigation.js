import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
import { displayPrice } from "../bag/displayPrice";
import { useBag } from "../bag/useBag";
import styles from "./Navigation.module.css";

const MiniBag = () => {
  const { checkoutDisabled, totalCost } = useBag();

  return checkoutDisabled ? (
    <span className={styles.miniBag}>
      {displayPrice(totalCost)} <MdShoppingCart />
    </span>
  ) : (
    <Link href="/bag">
      <a className={styles.miniBag}>
        {displayPrice(totalCost)} <MdShoppingCart />
      </a>
    </Link>
  );
};

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.homeLink}>DC5B Shop</a>
        </Link>
        <MiniBag />
      </div>
    </nav>
  );
};
