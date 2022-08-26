import Image from "next/image";
import Link from "next/link";
import type { Idea } from "../@types";

import styles from "../styles/Home.module.css";
import { PriceTag } from "./PriceTag";
import { AddToBag } from "./AddToBag";
import { TalkAboutIt } from "./TalkAboutIt";

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
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
          <div className={styles.cardImage}>
            <Image
              src={image}
              alt={alt}
              width="800px"
              height="800px"
              layout="responsive"
            />
          </div>
        </a>
      </Link>
      <PriceTag price={price} type={type} />
      <p className={styles.cardDescription}>{description}</p>
      <AddToBag id={id} maxQuantity={maxQuantity} price={price} />
      <TalkAboutIt blogPost={blogPost} />
    </li>
  );
};
