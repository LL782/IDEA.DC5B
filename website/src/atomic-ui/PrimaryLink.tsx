import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from "./PrimaryButton.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const PrimaryLink = ({ children, href, className, onClick }: Props) => (
  <Link href={href}>
    <a className={`${styles.button} ${className || ""}`} onClick={onClick}>
      {children}
    </a>
  </Link>
);
