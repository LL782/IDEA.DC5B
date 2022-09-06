import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { displayPrice } from "../shoppingBag/businessLogic/displayPrice";
import { useBag } from "../shoppingBag/ui/useBag";
import styles from "./Navigation.module.css";

const MiniBag = () => {
  const { checkoutDisabled, totalCost } = useBag();

  return checkoutDisabled ? (
    <span className={styles.miniBag}>
      {displayPrice(totalCost)} <BiShoppingBag />
    </span>
  ) : (
    <Link href="/bag">
      <a className={styles.miniBag}>
        {displayPrice(totalCost)} <BiShoppingBag />
      </a>
    </Link>
  );
};

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.homeLink}>SHOP.DC5B</a>
        </Link>
        <MiniBag />
      </div>
    </nav>
  );
};
