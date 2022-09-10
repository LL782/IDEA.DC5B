import styles from "./ListOfferings.module.css";
import ideas from "../productIdeas/data/ideas";
import { OptionalExtraCard } from "../siteMessaging";
import { IdeaCard } from "../atomic-ui/IdeaCard";

export function ListOfferings() {
  return (
    <ul className={styles.grid}>
      {ideas.map((idea, index) => [
        <IdeaCard idea={idea} key={idea.id} />,
        <OptionalExtraCard mapIndex={index} key="Optional extra cards" />,
      ])}
    </ul>
  );
}
