import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  EndIcon?: ReactElement;
  onclick?: () => void;
}

const sizeStyle = {
  sm: "py-1 px-3 text-sm",
  md: "py-1.5 px-4 text-sm",
  lg: "py-2 px-6 text-base",
};

const variantStyles = {
  primary:
    "bg-black text-white border border-gray-200 hover:bg-gray-900",
  secondary:
    "bg-white text-black border border-gray-200 hover:bg-gray-200",
};

const baseStyle =
  "rounded-md flex items-center justify-center cursor-pointer font-medium transition-colors duration-200";

export const Button = ({
  variant,
  size,
  startIcon,
  EndIcon,
  text,
  onclick,
}: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      className={`${variantStyles[variant]} ${sizeStyle[size]} ${baseStyle}`}
    >
      {startIcon && <span className="pr-2">{startIcon}</span>}
      {text}
      {EndIcon && <span className="pl-2">{EndIcon}</span>}
    </button>
  );
};
