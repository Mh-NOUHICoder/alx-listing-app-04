// components/common/Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  label?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>; // allows onClick, type, etc.

const Button: React.FC<ButtonProps> = ({ label, children, className = "", ...rest }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors duration-200 ${className}`}
      {...rest} // this passes onClick, type, etc.
    >
      {children || label}
    </button>
  );
};

export default Button;
