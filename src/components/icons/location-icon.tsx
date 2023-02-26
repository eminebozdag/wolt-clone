import SVGProps from "./types";
const LocationIcon = ({height, width, className, ...props}: SVGProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" aria-hidden="true" {...props} className={className}>
			<g fill="none" fill-rule="evenodd">
				<path d="M0 0h24v24H0z"></path>
				<path
					fill="#202125"
					d="M12 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m0-5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3m0 13.827C10.575 19.52 5 14.136 5 10c0-4.547 3.606-7 7-7s7 2.453 7 7c0 4.132-5.576 9.519-7 10.827M12 2c-3.933 0-8 2.992-8 8 0 5.169 7.359 11.606 7.673 11.878a.5.5 0 00.654 0C12.641 21.606 20 15.169 20 10c0-5.008-4.067-8-8-8"></path>
			</g>
		</svg>
	);
};
export default LocationIcon;
