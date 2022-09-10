import Image from "next/image";
import Link from "next/link";

import type { Idea } from "../productIdeas/businessLogic/Idea";

import styles from "./IdeaCard.module.css";
import { PriceTag } from "./PriceTag";
import { AddToBag } from "../shoppingBag/ui/AddToBag";
import { TalkAboutIt } from "../getInTouch/ui/TalkAboutIt";

interface Props {
  idea: Idea;
}

export const IdeaCard = ({ idea }: Props) => {
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
  } = idea;

  return (
    <li className={styles.card}>
      <Link href={`/ideas/${id}`}>
        <a>
          <div className={styles.cardImage}>
            <Image
              src={image}
              alt={alt}
              width="800px"
              height="800px"
              layout="responsive"
            />
          </div>
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
        </a>
      </Link>
      <PriceTag price={price} type={type} />
      <p className={styles.cardDescription}>{description}</p>

      <AddToBag id={id} maxQuantity={maxQuantity} price={price} />
      <TalkAboutIt blogPost={blogPost} />
    </li>
  );
};
