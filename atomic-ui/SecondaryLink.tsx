import Link from "next/link";
import styles from "./SecondaryLink.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const SecondaryLink = ({ children, href, className }: Props) => {
  return (
    <Link href={href} passHref>
      <a className={`${styles.link} ${className || ""}`}>{children}</a>
    </Link>
  );
};
