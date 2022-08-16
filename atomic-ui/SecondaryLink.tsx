import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import styles from "./SecondaryLink.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  newTab?: boolean;
}

export const SecondaryLink = ({ children, href, className, newTab }: Props) => {
  const target = newTab && { target: "_blank", rel: "noopener noreferrer" };
  return (
    <Link href={href} passHref>
      <a className={`${styles.link} ${className || ""}`} {...target}>
        {children}
      </a>
    </Link>
  );
};
