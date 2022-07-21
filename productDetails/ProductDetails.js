import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import styles from "./ProductDetail.module.css";
import { useBag } from "../bag/useBag";
import { displayPrice } from "../bag/displayPrice";

export default function ProductDetailPage({ product }) {
  const { addToBag } = useBag();
  const { title, type, description, image, alt, price, subTitle } = product;

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {title} - {subTitle} // DC5B
        </title>
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
        <button
          className={styles.button}
          onClick={() => {
            addToBag({ id: price.id });
          }}
        >
          Add to bag
        </button>
      </main>
    </div>
  );
}
