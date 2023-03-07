import SVGProps from "./types";
const TriangleIcon: React.FC<SVGProps> = ({
	className,

	...props
}: SVGProps) => {
	return (
		<svg viewBox="0 0 32 16" className={className} {...props} data-testid="triangle-icon">
			<path d="M 16,0 L32,16 H0 Z" className="drop-shadow-2xl fill-c-gray"></path>
			<path d="M 16,1 L31,16 H1 Z"></path>
		</svg>
	);
};
export default TriangleIcon;
