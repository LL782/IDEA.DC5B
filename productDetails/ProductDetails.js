import Head from "next/head";
import styles from "./ProductDetail.module.css";
import { useBag } from "../bag/useBag";
import { displayPrice } from "../bag/displayPrice";
import Link from "next/link";

export default function ProductDetailPage({ product }) {
  const { addToBag } = useBag();
  const { title, description, image, alt, price } = product;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | DC5B Shop</title>
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
        <div className={styles.imageHolder}>
          <img src={image} alt={alt} />
        </div>
        <p className={styles.price}>
          {displayPrice(price.amount)}{" "}
          <span className={styles.priceType}>PDF</span>
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
