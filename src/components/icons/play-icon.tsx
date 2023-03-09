import SVGProps from "./types";
const PlayIcon = ({height, width, className, ...props}: SVGProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 60" {...props} className={className} data-testid="play-icon">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23.987 22.973c0-1.109.792-1.604 1.775-1.103L39.1 28.667c.98.5.984 1.308 0 1.81l-13.338 6.796c-.98.5-1.775.004-1.775-1.103V22.973z"
			/>
		</svg>
	);
};
export default PlayIcon;
