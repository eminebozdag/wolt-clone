import React from "react";

interface Props {
  children?: any;
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary" | "submit";
  "aria-expanded"?: boolean;
  tabIndex?: string;

  onClick?(e: any): void;
  onMouseEnter?(e: any): void;
  onMouseLeave?(e: any): void;
}

const Button: React.FC<Props> = (props: Props) => {
  const {
    children,
    className,
    "aria-expanded": boolean,
    tabIndex,
    style,
    type,
    onClick,
    onMouseEnter,
    onMouseLeave,
  } = props;
  const defaultStyles = {
    primary: {},
    secondary: {},
    submit: {},
  };

  return React.createElement(
    "button",
    {
      "aria-expanded": boolean,
      className,
      style: {
        ...(type && defaultStyles[type]),
        ...style,
      },
      tabIndex,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...props,
    },
    children
  );
};

export default Button;
