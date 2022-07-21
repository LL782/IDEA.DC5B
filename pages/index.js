import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../data/products";
import { ProductCard } from "../atomic-ui/ProductCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DC5B Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SHOP.DC5B</h1>

        <p className={styles.description}>You must have a head</p>

        <ul className={styles.grid}>
          {products.map((product) => (
            <ProductCard product={product} key={product.price.id} />
          ))}
        </ul>
      </main>
    </div>
  );
}
