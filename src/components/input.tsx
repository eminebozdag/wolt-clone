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

const Input: React.FC<Props> = (props: Props) => {
  const { className, hover, children } = props;

  return React.createElement(
    "button",
    {
      ...props,
      className: clsx(
        "flex items-center min-h-[2.875rem] p-[1rem] whitespace-nowrap rounded-lg cursor-pointer",

        className
      ),
    },
    children
  );
};

export default Input;
