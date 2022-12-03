import Image from "next/image";
import Link from "next/link";

import type { PricedProduct } from "../productIdeas/businessLogic/Idea";

import styles from "./IdeaCard.module.css";
import { PriceTag } from "./PriceTag";
import { AddToBag } from "../shoppingBag/ui/AddToBag";
import { BlogLink } from "../getInTouch/ui/BlogLink";
import { LikeIdea } from "src/likeIdea/LikeIdea";
import { FEATURE_TOGGLE_LIKE_BUTTON } from "src/config/featureToggles";
import { cardImageSizes } from "./cardImageSizes";

interface Props {
  productIdea: PricedProduct;
}

export const PricedProductCard = ({ productIdea }: Props) => {
  const {
    alt,
    blogPost,
    description,
    id,
    image,
    maxQuantity,
    price,
    subTitle,
    title,
    type,
  } = productIdea;

  return (
    <li className={styles.card}>
      <Link href={`/ideas/${id}`}>
        <div className={styles.cardImage}>
          <Image src={image} alt={alt} fill sizes={cardImageSizes} />
        </div>
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
      </Link>
      <PriceTag price={price} type={type} />
      <p className={styles.cardDescription}>{description}</p>
      <AddToBag id={id} maxQuantity={maxQuantity} price={price} />
      <BlogLink blogPost={blogPost} id={id} />
      {FEATURE_TOGGLE_LIKE_BUTTON && <LikeIdea id={id} />}
    </li>
  );
};
