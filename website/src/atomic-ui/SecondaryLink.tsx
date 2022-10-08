import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from "./SecondaryLink.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const SecondaryLink = ({
  children,
  href,
  className,
  onClick = () => null,
}: Props) => {
  return (
    <Link href={href} passHref>
      <a className={`${styles.link} ${className || ""}`} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};
