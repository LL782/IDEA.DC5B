import styles from "./ListOfferings.module.css";
import ideas from "../productIdeas/data/ideas";
import { OptionalExtraCard } from "../siteMessaging";
import { RawIdeaCard } from "../atomic-ui/RawIdeaCard";
import { PricedProductCard } from "src/atomic-ui/PricedProductCard";

export function ListOfferings() {
  return (
    <ul className={styles.grid}>
      {ideas.map((idea, index) => [
        idea.type === "Raw idea" && <RawIdeaCard idea={idea} key={idea.id} />,
        idea.type !== "Raw idea" && (
          <PricedProductCard productIdea={idea} key={idea.id} />
        ),
        <OptionalExtraCard
          mapIndex={index}
          key={`Optional extra cards ${index}`}
        />,
      ])}
    </ul>
  );
}
