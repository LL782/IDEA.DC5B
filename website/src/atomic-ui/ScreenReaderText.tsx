import { ReactNode } from "react";

import styles from "./ScreenReaderText.module.css";

interface Props {
  children: ReactNode;
}

export const ScreenReaderText = ({ children }: Props) => (
  <span className={styles.text}>{children}</span>
);
