import styles from "../siteLayout/ui/Home.module.css";
import { ListOfferings } from "../ListOfferings/ListOfferings";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>DC5B Ideas</h1>
        <h2 className={styles.description}>
          From raw ideas to unique pieces – if it&apos;s developed at DC5B
          you&apos;ll find it right here. Come and see what we do, get inspired
          and tell us about the objeys and gifts of your dreams.
        </h2>
        <ListOfferings />
      </main>
    </div>
  );
}
