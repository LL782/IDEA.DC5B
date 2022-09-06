import styles from "../src/siteLayout/ui/Home.module.css";
import ideas from "../src/productIdeas/data/ideas";
import { OptionalExtraCard } from "../src/siteMessaging";
import { IdeaCard } from "../src/atomic-ui/IdeaCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>SHOP.DC5B</h1>
        <p className={styles.description}>You must have a head</p>

        <ul className={styles.grid}>
          {ideas.map((idea, index) => [
            <IdeaCard idea={idea} key={idea.id} />,
            <OptionalExtraCard mapIndex={index} key="Optional extra cards" />,
          ])}
        </ul>
      </main>
    </div>
  );
}
