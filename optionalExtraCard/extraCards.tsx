import styles from "../styles/Home.module.css";

export const YourIdeas = () => (
  <li className={styles.card}>
    <h2>Your ideas:</h2>
    <p className={styles.cardDescription}>
      What else can we do? What can we do instead? Let us know in as much detail
      as you want and we&apos;ll look into it for you.
    </p>
    <p className={styles.cardDescription}>
      Dreaming. We can manifest new artwork and other beautiful things –
      especially if we work together and share out ideas.
    </p>
  </li>
);

export const Prototypes = () => (
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
  </li>
);
