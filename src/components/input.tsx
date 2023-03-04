import clsx from "clsx";
import React, {useState} from "react";

interface Icon {
	before: any;
	after: any;
}
interface Props {
	type?: "text" | "email";
	value?: any;
	label?: string;
	start?: Icon | any;

	className?: string;
	labelClassName?: string;
	styles?: React.CSSProperties;

	onChange?(e: any): void;
}

const Input: React.FC<Props> = (props: Props) => {
	const {className, type, label, value, start, onChange} = props;
	const [isFocused, setIsFocused] = useState(false);

	const hasIcon = start !== undefined;
	const hasMultipleIcon = hasIcon && ("before" in start || "after" in start);
	const startIcon = hasMultipleIcon ? (!value ? start.before : start.after) : start;

	return (
		<div
			className={clsx(
				"relative w-full bg-c-white rounded-lg truncate overflow-hidden font-light",
				"focus:border-[2px] ",
				"border-2 border-c-gray",
				"hover:border-c-blue active:border-c-blue",
				"transition duration-300 ease-in-out",
			)}
			data-testid="input-component">
			{label && (
				<label
					className={clsx(
						"absolute top-[0.8rem] px-4 text-c-gray-medium pointer-events-none",
						"transition duration-100 ease-out",
						isFocused || value ? "translate-y-[-0.6rem] text-cxs" : "text-xs",
						start && "left-9",
					)}
					data-testid="search-label">
					{label}
				</label>
			)}
			<div className="flex px-4 cursor-text items-center">
				{hasIcon && (
					<div className="mr-4" data-testid="search-icon">
						{startIcon}
					</div>
				)}
				<input
					className={clsx("w-full py-[20px] pb-[6px] text-c-font-gray text-xs focus:outline-none", className)}
					type={type}
					value={value}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onChange={(e) => onChange && onChange(e)}
					data-testid="search-input"
				/>
			</div>
		</div>
	);
};

export type {Props};
export default Input;
