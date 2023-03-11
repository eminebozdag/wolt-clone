import clsx from "clsx";
import DownArrow from "components/icons/down-arrow";
import React from "react";
import ClickAwayListener from "react-click-away-listener";

interface Props {
	open?: boolean;
	button?: any;

	children?: any;
	className?: string;
	popoverClassName?: string;

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
				)}
				data-testid="popover-component">
				<div className="flex items-center" onClick={() => onClick && onClick()} data-testid="popover-button">
					{button}
					<div className="mx-1">
						<DownArrow height={20} width={20} className={open ? "rotate-180" : ""} />
					</div>
				</div>
				{open && (
					<div className={clsx("absolute top-12 right-0 z-50", popoverClassName)} data-testid="popover-children">
						{children}
					</div>
				)}
			</div>
		</ClickAwayListener>
	);
};
export type {Props};
export default PopoverButton;
