import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../data/products";
import { useBag } from "../bag/useBag";
import { displayPrice } from "../bag/displayPrice";
import { Navigation } from "../navigation/Navigation";

export default function Home() {
  const {
    addToBag,
    checkout,
    checkoutDisabled,
    totalCost,
    totalItems,
  } = useBag();

  return (
    <div className={styles.container}>
      <Head>
        <title>DC5B Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <h1 className={styles.title}>DC5B Shop</h1>

        <p className={styles.description}>
          Imagination aids for now and in the future
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { title, description, image, alt, price } = product;
            return (
              <li key={price.id} className={styles.card}>
                <h3>{title}</h3>
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
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          className={styles.footerLink}
          href="https://dc5b.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; {new Date().getFullYear()}{" "}
          <i className={styles.logo}>
            <svg
              className={styles.logoShadow0}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <path d="M160,208V689l100,5v306H360V698l90,4V840H550V707l290,13V160ZM310,580V300l380,16.2V574Z" />
            </svg>
            <svg
              className={styles.logoShadow1}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <path d="M160,208V689l100,5v306H360V698l90,4V840H550V707l290,13V160ZM310,580V300l380,16.2V574Z" />
            </svg>
            <svg
              className={styles.logoShadow2}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <path d="M160,208V689l100,5v306H360V698l90,4V840H550V707l290,13V160ZM310,580V300l380,16.2V574Z" />
            </svg>
          </i>
          DC5B
        </a>
      </footer>
    </div>
  );
}
