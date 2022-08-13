import Link from "next/link";
import styles from "./SecondaryLink.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const SecondaryLink = ({ children, href, className }: Props) => (
  <Link href={href}>
    <a className={`${styles.link} ${className || ""}`}>{children}</a>
  </Link>
);
