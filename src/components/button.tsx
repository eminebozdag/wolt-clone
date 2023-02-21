import clsx from "clsx";
import React from "react";

interface Props {
  variant?: "primary" | "secondary" | "outline" | "FAB" | "flat";
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
      "justify-center text-[1rem] text-c-white bg-c-blue font-bold px-[1rem] min-h-[2.875rem]",
      hover && "hover:bg-c-blue/90"
    ),
    secondary: clsx(
      "justify-center text-[0.875rem] font-medium",
      hover && "hover:bg-c-white/20 "
    ),
    outline: clsx("w-full border-2 font-normal p-4"),
    FAB: clsx(
      "justify-center rounded-full bg-c-gray-light p-4",
      hover && "hover:bg-c-gray"
    ),
    flat: clsx("p-0 gap-1 text-c-white text-start hover:underline"),
  };

  return React.createElement(
    "button",
    {
      ...props,
      className: clsx(
        "flex items-center  whitespace-nowrap rounded-lg cursor-pointer transition duration-120 ease-out hover:ease-in",
        variant && styles[variant],
        className
      ),
    },
    children
  );
};

export default Button;
