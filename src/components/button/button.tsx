import React from "react";

interface Props {
  children?: any;
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary";

  onClick?(e: any): void;
}

const Button: React.FC<Props> = (props: Props) => {
  const { children, className, style, type, onClick } = props;
  const defaultStyles = {
    primary: {},
    secondary: {},
  };

  return React.createElement(
    "button",
    {
      className,
      style: {
        ...(type && defaultStyles[type]),
        ...style,
      },
      onClick,
      ...props,
    },
    children
  );
};

export default Button;
