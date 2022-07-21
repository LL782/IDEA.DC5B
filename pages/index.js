import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../data/products";
import { useBag } from "../bag/useBag";
import { displayPrice } from "../bag/displayPrice";
import { PrimaryButton } from "../atomic-ui/PrimaryButton";

const ProductCard = ({ product }) => {
  const { title, type, description, image, alt, price, subTitle } = product;
  return (
    <li key={price.id} className={styles.card}>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
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
      <PrimaryButton onClick={() => addToBag({ id: price.id })}>
        Add to bag
      </PrimaryButton>
    </li>
  );
};

export default function Home() {
  const { addToBag } = useBag();

  return (
    <div className={styles.container}>
      <Head>
        <title>DC5B Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SHOP.DC5B</h1>

        <p className={styles.description}>
          Imagination aids for present and future ages
        </p>

        <ul className={styles.grid}>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </ul>
      </main>
    </div>
  );
}
