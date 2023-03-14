import SVGProps from "./types";
const CloseIcon = ({height, width, className, onClick, ...props}: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="lightgray"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			{...props}
			className={className}
			onClick={onClick}
			data-testid="close-icon">
			<path d="M2.44 19.44a1.5 1.5 0 002.121 2.121l7.262-7.26a.25.25 0 01.354 0l7.262 7.262a1.5 1.5 0 102.122-2.12l-7.26-7.266a.25.25 0 010-.354l7.262-7.262a1.5 1.5 0 00-2.124-2.12L12.177 9.7a.25.25 0 01-.354 0L4.561 2.44A1.5 1.5 0 002.44 4.56L9.7 11.823a.25.25 0 010 .354L2.44 19.44z" />
		</svg>
	);
};
export default CloseIcon;
