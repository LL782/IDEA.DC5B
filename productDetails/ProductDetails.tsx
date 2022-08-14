import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Product } from "../@types/Product";

import styles from "./ProductDetail.module.css";
import { displayPrice } from "../bag/displayPrice";
import { AddToBag } from "../atomic-ui/AddToBag";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const { alt, description, image, maxQuantity, price, subTitle, title, type } =
    product;

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${title} - ${subTitle} // DC5B`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.breadcrumbs}>
        <Link href="/">
          <a className={styles.breadcrumb}>Products</a>
        </Link>{" "}
        &gt; <span className={styles.currentBreadcrumb}>{title}</span>
      </nav>

      <main className={styles.main}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.subTitle}>{subTitle}</h4>
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
        <AddToBag maxQuantity={maxQuantity} price={price} />
      </main>
    </div>
  );
}
