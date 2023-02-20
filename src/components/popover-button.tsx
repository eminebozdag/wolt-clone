import clsx from "clsx";
import React from "react";
import ClickAwayListener from "react-click-away-listener";
import DownArrow from "./icons/down-arrow";

interface Props {
  open?: boolean;
  button?: any;

  children?: any;
  className?: string;
  popoverClassName?: string;
  styles?: React.CSSProperties;

  onClick?(): void;
  onClickAway?(): void;
}

const PopoverButton: React.FC<Props> = (props: Props) => {
  const {
    open,
    button,
    className,
    popoverClassName,
    children,
    onClick,
    onClickAway,
  } = props;

  return (
    <ClickAwayListener onClickAway={() => onClickAway && onClickAway()}>
      <div
        className={clsx(
          "relative flex items-center",
          "h-10 rounded-full bg-c-gray-light px-1 hover:bg-c-gray cursor-pointer",
          className
        )}
      >
        <div className="flex items-center" onClick={() => onClick && onClick()}>
          {button}
          <div className="ml-1">
            <DownArrow
              height={24}
              width={24}
              fill={"c-font-gray"}
              className={open ? "rotate-180" : ""}
            />
          </div>
        </div>

        {open && (
          <div
            className={clsx("absolute top-12 right-0 z-50", popoverClassName)}
          >
            {children}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};
export default PopoverButton;
