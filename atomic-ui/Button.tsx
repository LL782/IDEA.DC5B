import styles from "./Button.module.css";

export const Button = ({ children, disabled, onClick, className }) => (
  <button
    className={`${styles.button} ${className || ""}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
