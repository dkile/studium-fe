import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props}>{children}</button>
  );
}

export default Button;
