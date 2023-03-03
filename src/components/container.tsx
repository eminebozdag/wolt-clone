import clsx from "clsx";
interface Props {
	children?: any;
	className?: string;
}

const Container = (props: Props) => {
	const {children, className} = props;

	return (
		<div className={clsx("flex max-w-[1200px] mobile:px-[30px]", className)} data-testid="container-component">
			{children}
		</div>
	);
};

export type {Props};
export default Container;
