import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { displayPrice } from "../../shoppingBag/businessLogic/displayPrice";
import { useBagToolkit } from "../../shoppingBag/hooks/useBagToolkit";
import styles from "./Navigation.module.css";

const Logo = () => (
  <svg
    className={styles.logo}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="1000"
    height="1000"
    viewBox="0 0 1000 1000"
    xmlSpace="preserve"
  >
    <g transform="matrix(1 0 0 1 508.1756 407.4871)" id="74068">
      <g
        transform="matrix(1.1721 0 0 1.1721 -0.0059 93.7621)"
        id="Layer_2_copy"
      >
        <path
          transform=" translate(-500, -580)"
          d="M 160 208 V 689 l 100 5 v 306 H 360 V 698 l 90 4 V 840 H 550 V 707 l 290 13 V 160 Z M 310 580 V 300 l 380 16.2 V 574 Z"
          strokeLinecap="round"
        />
      </g>
    </g>
  </svg>
);

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
          <Logo />
        </Link>
        <MiniBag />
      </div>
    </nav>
  );
};
