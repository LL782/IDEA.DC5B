import { Button } from "./Button";
import styles from "./PrimaryButton.module.css";

export const PrimaryButton = ({ children, onClick, className, disabled }) => (
  <Button
    className={`${styles.button} ${className || ""}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);
