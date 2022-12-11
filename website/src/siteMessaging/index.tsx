import styles from "../atomic-ui/IdeaCard.module.css";
import Link from "next/link";
import { noteButtonClick } from "src/webActions/noteButtonClick";
import Image from "next/image";
import { cardImageSizes } from "src/atomic-ui/cardImageSizes";

interface Props {
  mapIndex: number;
}

export const OptionalExtraCard = ({ mapIndex }: Props) => {
  if (mapIndex === 3) return <Customisation />;
  if (mapIndex === 6) return <SiteIsYoung />;
  return null;
};

const Customisation = () => (
  <li className={`${styles.card} ${styles.card__decorated}`}>
    <div className={styles.content}>
      <h2>Customisation</h2>
      <p className={styles.cardDescription}>
        Your thoughts are invaluable. We develop ideas based on your feedback. 
        So whether it&apos;s price, size, quality or something else, just let
        us know of any changes you want.
      </p>
      <p className={styles.cardDescription}>
        <Link
          onClick={() => noteButtonClick("email", "Customisation")}
          href={
            "mailto:dc5b@dc5b.com?subject=Customisation&body=Hi%20there%2C%0D%0A%0D%0AI've%20just%20been%20on%20your%20website%20and%20have%20some%20ideas...%0D%0A%0D%0A-%20Do%20you%20do%20...%20%3F%0D%0A-%20I%20like%20...%20but%20not%20the%20...%0D%0A-%20Would%20you%20work%20on%20...%20%3F%0D%0A%0D%0AThanks%20very%20much!"
          }
          target="_blank"
          className={styles.littleLink}
        >
          Send us an email
        </Link>
      </p>
    </div>
    <div className={styles.decoration}>
      <Image
        src="/decoration-images/sculpture.jpg?v2"
        alt={""}
        fill
        sizes={cardImageSizes}
      />
    </div>
  </li>
);
const SiteIsYoung = () => (
  <li className={`${styles.card} ${styles.card__decorated}`}>
    <div className={styles.content}>
      <h2>The site is young</h2>
      <p className={styles.cardDescription}>
        DC5B is a brand under development. It&apos;s not only the products you
        can influence but the whole business. We all about puttiing something
        out there, getting feedback and refining.
      </p>
      <p className={styles.cardDescription}>
        We&apos;re building something that we want you to really love, so
        whatever it is, we&apos;d love to know your reaction. Add your ideas
        into the mix by telling us what you think.
      </p>
      <p className={styles.cardDescription}>
        <Link
          onClick={() => noteButtonClick("email", "The site is young")}
          href="mailto:dc5b@dc5b.com?subject=Where%20shall%20we%20go%20from%20here%3F&body=I've%20just%20been%20on%20your%20website%20and%20wanted%20to%20get%20in%20touch%20with%20an%20idea%20of%20my%20own...%0D%0A%0D%0A%3A)%0D%0A%0D%0A"
          target="_blank"
          className={styles.littleLink}
        >
          Where shall we go from here?
        </Link>{" "}
        👈 <em>email</em>
      </p>
    </div>
    <div className={styles.decoration}>
      <Image
        src="/decoration-images/DC5B-rocks.jpg"
        alt={""}
        fill
        sizes={cardImageSizes}
      />
    </div>
  </li>
);
