import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { displayPrice } from "../../shoppingBag/businessLogic/displayPrice";
import { useBagToolkit } from "../../shoppingBag/hooks/useBagToolkit";
import styles from "./Navigation.module.css";

const MiniBag = () => {
  const { checkoutDisabled, totalCost } = useBagToolkit();

  return checkoutDisabled ? (
    <span className={styles.miniBag}>
      {displayPrice(totalCost)} <BiShoppingBag />
    </span>
  ) : (
    <Link href="/bag" className={styles.miniBag}>
      {displayPrice(totalCost)} <BiShoppingBag />
    </Link>
  );
};

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.homeLink}>
          DC5B Ideas
        </Link>
        <MiniBag />
      </div>
    </nav>
  );
};
