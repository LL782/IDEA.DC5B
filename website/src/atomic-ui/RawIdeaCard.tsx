import Image from "next/image";
import Link from "next/link";

import type { RawIdea } from "../productIdeas/businessLogic/Idea";

import styles from "./IdeaCard.module.css";
import { PriceTag } from "./PriceTag";
import { TalkAboutIt } from "../getInTouch/ui/TalkAboutIt";

interface Props {
  idea: RawIdea;
}

export const RawIdeaCard = ({ idea }: Props) => {
  const { alt, blogPost, description, id, image, subTitle, title, type } = idea;

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
      <PriceTag type={type} />
      <p className={styles.cardDescription}>{description}</p>
      <TalkAboutIt blogPost={blogPost} />
    </li>
  );
};
