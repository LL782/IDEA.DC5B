import Image from "next/image";
import Link from "next/link";
import { Product } from "../@types/Product";

import styles from "../styles/Home.module.css";
import { PriceTag } from "./PriceTag";
import { AddToBag } from "./AddToBag";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const {
    alt,
    description,
    id,
    image,
    maxQuantity,
    price,
    subTitle,
    title,
    type,
  } = product;

  return (
    <li className={styles.card}>
      <Link href={`/products/${id}`}>
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
      <AddToBag maxQuantity={maxQuantity} price={price} />
    </li>
  );
};
