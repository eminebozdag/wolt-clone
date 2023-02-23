import clsx from "clsx";
import React, { useState } from "react";

interface Icon {
  before: any;
  after: any;
}
interface Props {
  type?: "text" | "email";
  value?: any;
  label?: string;
  start?: Icon | any;

  children?: any;
  className?: string;
  labelClassName?: string;
  styles?: React.CSSProperties;

  onClick?(e: any): void;
  onFocus?(): void;
  onBlur?(): void;
  onChange?(e: any): void;
}

const Input: React.FC<Props> = (props: Props) => {
  const { className, type, children, label, value, start, onChange } = props;
  const [isFocused, setIsFocused] = useState(false);

  const hasIcon = start !== undefined;
  const hasMultipleIcon = hasIcon && ("before" in start || "after" in start);
  const startIcon = hasMultipleIcon
    ? !value
      ? start.before
      : start.after
    : start;

  // console.log(hasIcon, hasMultipleIcon, startIcon);
  return (
    <div className="relative w-full bg-c-white rounded-lg truncate overflow-hidden border-2 border-c-gray hover:border-c-blue focus:outline-none focus:border-[2px] focus:border-c-blue active:border-c-blue transition duration-300 ease-out">
      {label && (
        <label
          className={clsx(
            "absolute top-[0.7rem] px-4 text-c-gray-medium pointer-events-none transition duration-100 ease-out",
            isFocused || value ? "translate-y-[-0.5rem] text-xs" : "text-base",
            start && "left-9"
          )}
        >
          {label}
        </label>
      )}
      <div className="flex px-4 cursor-text items-center">
        {hasIcon && <div className="mr-4"> {startIcon}</div>}
        <input
          className={clsx("w-full pt-5 pb-1 focus:outline-none", className)}
          type={type}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange && onChange(e)}
        />

        {children}
      </div>
    </div>
  );
};

export default Input;
