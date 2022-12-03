import Image from "next/image";
import Link from "next/link";

import type { RawIdea } from "../productIdeas/businessLogic/Idea";

import styles from "./IdeaCard.module.css";
import { PriceTag } from "./PriceTag";
import { BlogLink } from "../getInTouch/ui/BlogLink";
import { cardImageSizes } from "./cardImageSizes";

interface Props {
  idea: RawIdea;
}

export const RawIdeaCard = ({ idea }: Props) => {
  const { alt, blogPost, description, id, image, title, type } = idea;

  return (
    <li className={styles.card}>
      <Link href={`/ideas/${id}`}>
        <div className={styles.cardImage}>
          <Image src={image} alt={alt} fill sizes={cardImageSizes} />
        </div>
        <h3>{title}</h3>
      </Link>
      <PriceTag type={type} />
      <p className={styles.cardDescription}>{description}</p>
      <BlogLink blogPost={blogPost} id={id} />
    </li>
  );
};
