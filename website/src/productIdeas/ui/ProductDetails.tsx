import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import type { PricedProduct } from "../businessLogic/Idea";

import styles from "./Details.module.css";
import { AddToBag } from "../../shoppingBag/ui/AddToBag";
import { LoadBespokeDetails } from "./LoadBespokeDetails";
import { TalkAboutIt } from "../../getInTouch/ui/TalkAboutIt";
import { PriceTag } from "src/atomic-ui/PriceTag";

interface Props {
  idea: PricedProduct;
}

export const ProductDetails = ({ idea }: Props) => {
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
    <div className={styles.container}>
      <NextSeo title={`${title} - ${subTitle} // DC5B`} />
      <nav className={styles.breadcrumbs}>
        <Link href="/">
          <a className={styles.breadcrumb}>Ideas</a>
        </Link>{" "}
        &gt; <span className={styles.currentBreadcrumb}>{title}</span>
      </nav>
      <main className={styles.main}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.subTitle}>{subTitle}</h4>
        <div className={styles.heroImage}>
          <Image
            src={image}
            alt={alt}
            width="800px"
            height="800px"
            layout="responsive"
          />
        </div>
        <PriceTag price={price} type={type} />
        <p className={styles.cardDescription}>{description}</p>
        <AddToBag id={id} maxQuantity={maxQuantity} price={price} />
        <TalkAboutIt blogPost={blogPost} />
        <LoadBespokeDetails id={id} />
      </main>
    </div>
  );
};
