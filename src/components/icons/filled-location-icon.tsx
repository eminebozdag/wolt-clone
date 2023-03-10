import SVGProps from "./types";
const FilledLocationIcon = ({height, width, className, ...props}: SVGProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" aria-hidden="true" {...props} className={className}>
			<g fill="none" fillRule="evenodd">
				<path d="M0 0h24v24H0z"></path>
				<path
					fill="#202125"
					d="M12 7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3m0-5c-3.933 0-8 2.992-8 8 0 5.169 7.359 11.606 7.673 11.878a.5.5 0 00.654 0C12.641 21.606 20 15.169 20 10c0-5.008-4.067-8-8-8"></path>
			</g>
		</svg>
	);
};
export default FilledLocationIcon;
