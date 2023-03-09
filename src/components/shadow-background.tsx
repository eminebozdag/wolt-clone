import clsx from "clsx";
interface Props {
	type?: "modal" | "component";
	className?: string;
	children?: any;
}
const ShadowBackground = (props: Props) => {
	const {className, children, type} = props;
	const styles = {
		modal: clsx("fixed flex items-center justify-center z-40 bg-c-font-gray/70"),
		component: clsx("absolute block bg-c-font-gray/30"),
	};

	return (
		<div className={clsx("top-0 right-0 left-0 w-full h-full", type && styles[type], className)} data-testid="shadow-background-component">
			{children}
		</div>
	);
};
export type {Props};
export default ShadowBackground;
