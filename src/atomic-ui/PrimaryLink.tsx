import Link from "next/link";
import styles from "./PrimaryButton.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const PrimaryLink = ({ children, href, className }: Props) => (
  <Link href={href}>
    <a className={`${styles.button} ${className || ""}`}>{children}</a>
  </Link>
);
