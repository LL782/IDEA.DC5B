import Image from "next/image";

import styles from "../styles/Home.module.css";
import { displayPrice } from "../bag/displayPrice";
import { PrimaryButton } from "../atomic-ui/PrimaryButton";
import { useBag } from "../bag/useBag";

export const ProductCard = ({ product }) => {
  const { title, type, description, image, alt, price, subTitle } = product;
  const { addToBag } = useBag();

  return (
    <li className={styles.card}>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <Image
        src={image}
        alt={alt}
        width="800px"
        height="800px"
        layout="responsive"
      />
      <p className={styles.price}>
        {displayPrice(price.amount)}{" "}
        <span className={styles.priceType}>{type}</span>
      </p>
      <p className={styles.cardDescription}>{description}</p>
      <PrimaryButton onClick={() => addToBag({ id: price.id })}>
        Add to bag
      </PrimaryButton>
    </li>
  );
};
