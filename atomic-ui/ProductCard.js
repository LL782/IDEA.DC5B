import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { PrimaryButton } from "./PrimaryButton";
import { useBag } from "../bag/useBag";
import { PriceTag } from "./PriceTag";

export const ProductCard = ({ product }) => {
  const { title, type, description, image, alt, price, subTitle } = product;
  const { addToBag } = useBag();

  return (
    <li className={styles.card}>
      <Link href={`/products/${price.id}`}>
        <a>
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
          <Image
            src={image}
            alt={alt}
            width="800px"
            height="800px"
            layout="responsive"
          />
        </a>
      </Link>
      <PriceTag price={price} type={type} />
      <p className={styles.cardDescription}>{description}</p>
      <PrimaryButton onClick={() => addToBag({ id: price.id })}>
        Add to bag
      </PrimaryButton>
    </li>
  );
};
