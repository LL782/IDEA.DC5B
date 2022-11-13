import styles from "../siteLayout/ui/Home.module.css";
import { ListOfferings } from "../ListOfferings/ListOfferings";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>DC5B Ideas</h1>
        <ListOfferings />
      </main>
    </div>
  );
}
