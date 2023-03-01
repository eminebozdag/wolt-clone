import SVGProps from "../types";
const GoogleIcon = ({height, width, className, ...props}: SVGProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			strokeLinejoin="round"
			strokeMiterlimit="2"
			{...props}
			className={className}>
			<g transform="translate(-.06 -.064)">
				<path fill="none" d="M.06.064h19.548v19.969H.06z"></path>
				<clipPath id="google_icon_svg__a">
					<path d="M.06.064h19.548v19.969H.06z"></path>
				</clipPath>
				<g clipPath="url(#google_icon_svg__a)">
					<path fill="none" d="M.06.063h19.475v19.883H.061z"></path>
					<path
						d="M19.55 10.257c0-.705-.063-1.382-.18-2.031h-9.354v3.841h5.345a4.572 4.572 0 01-1.982 2.997v2.493h3.21c1.877-1.73 2.961-4.276 2.961-7.3z"
						fill="#4285f4"></path>
					<path
						d="M10.016 19.963c2.682 0 4.93-.89 6.572-2.406l-3.209-2.493c-.89.596-2.027.948-3.363.948-2.587 0-4.776-1.748-5.558-4.095H1.14v2.574a9.93 9.93 0 008.876 5.472z"
						fill="#34a853"></path>
					<path d="M4.458 11.917a5.97 5.97 0 01-.31-1.886c0-.654.112-1.292.31-1.888V5.57H1.14a9.94 9.94 0 000 8.92l3.318-2.574z" fill="#fbbc05"></path>
					<path
						d="M10.016 4.05c1.457 0 2.767.5 3.796 1.484l2.85-2.848C14.94 1.083 12.691.099 10.015.099A9.927 9.927 0 001.14 5.571l3.318 2.572C5.24 5.797 7.43 4.05 10.016 4.05z"
						fill="#ea4335"></path>
				</g>
			</g>
		</svg>
	);
};
export default GoogleIcon;
