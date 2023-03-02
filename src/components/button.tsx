import clsx from "clsx";
import React from "react";

interface Props {
	variant?: "primary" | "secondary" | "outline" | "FAB" | "flat" | "toolbar";
	hover?: boolean;

	children?: any;
	className?: string;
	styles?: React.CSSProperties;

	onClick?(e: any): void;
	onMouseEnter?(e: any): void;
	onMouseLeave?(e: any): void;
}

const Button: React.FC<Props> = (props: Props) => {
	const {variant, className, hover, children} = props;
	const styles = {
		primary: clsx("justify-center text-sm text-c-white font-semibold bg-c-blue px-[1rem] min-h-[2.875rem] rounded-lg", hover && "hover:bg-c-blue/90"),
		secondary: clsx("justify-center text-xs font-normal rounded-lg", hover && "hover:bg-c-white/20"),
		outline: clsx("w-full font-normal p-4 border-2 rounded-lg"),
		FAB: clsx("justify-center rounded-full bg-c-gray-light p-4", hover && "hover:bg-c-gray"),
		flat: clsx("p-0 gap-1 text-c-white text-start hover:underline"),
		toolbar: clsx(
			"text-xs text-start text-c-font-gray rounded-lg",
			"w-[178.500px] h-[35px]",
			"py-[7px] px-[14px]",
			"hover:bg-c-gray-light/50 active:bg-c-gray-light",
		),
	};

	return React.createElement(
		"button",
		{
			...props,
			className: clsx(
				"flex items-center whitespace-nowrap cursor-pointer",
				"transition duration-120 ease-in-out hover:ease-in-out",
				variant && styles[variant],
				className,
			),
			"data-testid": "button-component",
		},
		children,
	);
};

export type {Props};
export default Button;
