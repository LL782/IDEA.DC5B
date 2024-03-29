import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import type { RawIdea } from "../businessLogic/Idea";

import styles from "./Details.module.css";
import { LoadBespokeDetails } from "./LoadBespokeDetails";
import { BlogLink } from "../../getInTouch/ui/BlogLink";
import { PriceTag } from "../../atomic-ui/PriceTag";
import { columnImageSizes } from "./columnImageSizes";

interface Props {
  idea: RawIdea;
}

export const IdeaDetails = ({ idea }: Props) => {
  const { alt, blogPost, description, id, image, title, type } = idea;

  return (
    <div className={styles.container}>
      <NextSeo title={`${title} - ${type} // DC5B Ideas`} />
      <nav className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumb}>
          Ideas
        </Link>{" "}
        &gt; <span className={styles.currentBreadcrumb}>{title}</span>
      </nav>
      <main className={styles.main}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.heroImage}>
          <Image src={image} alt={alt} fill sizes={columnImageSizes} />
        </div>
        <PriceTag type={type} />
        <p className={styles.cardDescription}>{description}</p>
        <BlogLink blogPost={blogPost} id={id} type={"primary"} />
        <LoadBespokeDetails id={id} />
      </main>
    </div>
  );
};
