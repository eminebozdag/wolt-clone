import SVGProps from "./types";
const LocationIcon = ({ height, width, className, ...props }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9.5C6 12.813 8.687 15.5 12 15.5C15.312 15.497 17.997 12.813 18 9.5C18 6.187 15.313 3.5 12 3.5C8.687 3.5 6 6.187 6 9.5ZM2.5 9.5C2.506 4.256 6.756 0.006 12 0C17.244 0.006 21.493 4.255 21.5 9.499C21.5 16.044 14.958 21.987 12.958 23.653C12.402 24.114 11.597 24.114 11.041 23.653C9.037 21.987 2.5 16.044 2.5 9.5ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
      />
    </svg>
  );
};
export default LocationIcon;
