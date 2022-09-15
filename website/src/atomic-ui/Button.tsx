import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button = ({ children, disabled, onClick, className }: Props) => (
  <button
    className={`${styles.button} ${className || ""}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
