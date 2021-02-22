import Link from "next/link";
import styles from "./PrimaryButton.module.css";

export const PrimaryLink = ({ children, href, className }) => (
  <Link href={href}>
    <a className={`${styles.button} ${className || ""}`}>{children}</a>
  </Link>
);
