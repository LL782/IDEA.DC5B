import { ChangeEventHandler, useState } from "react";

import { ScreenReaderText } from "../atomic-ui/ScreenReaderText";
import styles from "./LikeIdea.module.css";

interface Props {
  id: string;
}

export const LikeIdea = ({ id }: Props) => {
  const [liked, setLiked] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = () => setLiked(!liked);

  return (
    <div className={styles.container}>
      <label
        className={
          liked ? `${styles.label} ${styles.checked}` : `${styles.label}`
        }
        htmlFor={id}
      >
        <ScreenReaderText>{liked ? `Liked it` : `Like it`}</ScreenReaderText>
      </label>
      <input
        checked={liked}
        className={styles.input}
        type="checkbox"
        onChange={onChange}
        id={id}
        name={id}
      />
    </div>
  );
};
