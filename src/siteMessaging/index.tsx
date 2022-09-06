import { TalkAboutIt } from "../getInTouch/ui/TalkAboutIt";
import styles from "../siteLayout/ui/Home.module.css";

interface Props {
  mapIndex: number;
}

export const OptionalExtraCard = ({ mapIndex }: Props) => {
  if (mapIndex === 3) return <Prototypes />;
  if (mapIndex === 6) return <YourIdeas />;
  return null;
};

const YourIdeas = () => (
  <li className={styles.card}>
    <h2>Your ideas:</h2>
    <p className={styles.cardDescription}>
      What else can we do? Giclée, large size, choice of medium. Let us know in
      as much detail as you want.
    </p>
    <p className={styles.cardDescription}>
      We&apos;ll look into it! Dreaming, we can manifest beautiful things. First
      step is dropping a word or two into a message.
    </p>
  </li>
);

const Prototypes = () => (
  <li className={styles.card}>
    <h2>Prototypes</h2>
    <p className={styles.cardDescription}>
      This is all new to us (to me really). We&apos;re putting ideas out here to
      get feedback. What do you like? What works? What doesn&apos;t?
    </p>
    <p className={styles.cardDescription}>
      Your feedback is not only welcome, it&apos;s the way this business is
      going to grow. Within reason, we want to provide artwork in exactly the
      way you want it.
    </p>
    <p className={styles.cardDescription}>
      T-shirt, coaster, wall vinyl, colouring in book, huge oil paintings, brass
      etching. All formats considered. If anything strikes a chord do say.
    </p>
    <p>
      <TalkAboutIt blogPost="https://dc5b.dog/2022/08/16/prototypes-call-them-prototypes-go-so-what-you-gonna-do-about-them-thats-what-i-want-to-know/" />
    </p>
  </li>
);
