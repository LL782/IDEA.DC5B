import Image from "next/image";
import styles from "./Poster.module.css";

export default function Poster() {
  return (
    <div className={styles.poster}>
      <div className={styles["image-holder"]}>
        <Image
          src={"/idea-images/bearded-strange-face-colouring.jpg"}
          alt={""}
          fill
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.title}>DC5B Ideas</div>
    </div>
  );
}
