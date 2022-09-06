import { Button } from "./Button";
import styles from "./PrimaryButton.module.css";

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

export const PrimaryButton = ({
  children,
  onClick,
  className,
  disabled,
}: Props) => (
  <Button
    className={`${styles.button} ${className || ""}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);
