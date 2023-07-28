import React from "react";
import styles from "./Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  ...props
}) => (
  <button
    type="button"
    className={[styles.button, styles[variant]].join(" ")}
    {...props}
  >
    {children}
  </button>
);

export default Button;
