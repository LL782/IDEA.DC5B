import styles from "../src/siteLayout/ui/Home.module.css";
import { ListOfferings } from "../src/ListOfferings/ListOfferings";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>DC5B Ideas</h1>
        <p className={styles.description}>Own it</p>
        <ListOfferings />
      </main>
    </div>
  );
}
