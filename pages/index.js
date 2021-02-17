import Head from "next/head";
import styles from "../styles/Home.module.css";

import products from "../products.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DC5B Odd Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DC5B Odd Shop</h1>

        <p className={styles.description}>
          Surreal imagination adds from the surreal depths of the interwebs!
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { title, description, image, alt, price, id } = product;
            return (
              <li key={id} className={styles.card}>
                <a href="https://nextjs.org/docs">
                  <h3>{title}</h3>
                  <div className={styles.imageHolder}>
                    <img src={image} alt={alt} />
                  </div>
                  <p>£{price.toFixed(2)}</p>
                  <p>{description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
