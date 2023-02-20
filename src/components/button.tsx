import clsx from "clsx";
import React from "react";

interface Props {
  variant?: "primary" | "secondary" | "outline";
  hover?: boolean;

  children?: any;
  className?: string;
  styles?: React.CSSProperties;

  onClick?(e: any): void;
  onMouseEnter?(e: any): void;
  onMouseLeave?(e: any): void;
}

const Button: React.FC<Props> = (props: Props) => {
  const { variant, className, hover, children } = props;
  const styles = {
    primary: clsx(
      "text-[1rem] text-c-white bg-c-blue font-bold",
      hover && "hover:bg-c-blue/10"
    ),
    secondary: clsx(
      "text-[0.875rem] text-c-font-gray font-medium",
      hover && "hover:bg-c-font-gray/5"
    ),
    outline: clsx(
      "w-full border-2 font-normal p-4 transition duration-120 ease-out",
      hover && "hover:ease-in"
    ),
  };

  return React.createElement(
    "button",
    {
      ...props,
      className: clsx(
        "flex items-center min-h-[2.875rem] p-[1rem] whitespace-nowrap rounded-lg cursor-pointer",
        variant && styles[variant],
        className
      ),
    },
    children
  );
};

export default Button;
