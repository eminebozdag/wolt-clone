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
	const {open, button, className, children, popoverClassName, onClick, onClickAway} = props;

	return (
		<ClickAwayListener onClickAway={() => onClickAway && onClickAway()}>
			<div
				className={clsx(
					"relative flex items-center",
					"bg-c-gray-light hover:bg-c-gray rounded-full cursor-pointer",
					"p-[2px] tabletL:p-[4px]",
					className,
				)}>
				<div className="flex items-center" onClick={() => onClick && onClick()}>
					{button}
					<div className="mx-1">
						<DownArrow height={20} width={20} className={open ? "rotate-180" : ""} />
					</div>
				</div>
				{open && <div className={clsx("absolute top-12 right-0 z-50", popoverClassName)}>{children}</div>}
			</div>
		</ClickAwayListener>
	);
};
export default PopoverButton;
