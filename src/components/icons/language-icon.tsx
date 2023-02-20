import SVGProps from "./types";
const LanguageIcon = ({ height, width, className, ...props }: SVGProps) => {
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
        d="M24 12.04c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12h.125C18.68 24.035 23.993 18.722 24 12.167v-.125zm-2 0c0 .89-.121 1.776-.359 2.634a.5.5 0 01-.681.326 3.484 3.484 0 01-1.517-1.268l-2.218-3.328a2.5 2.5 0 00-2.08-1.113h-.433a2.75 2.75 0 110-5.5h2.772a.5.5 0 01.289.092A9.993 9.993 0 0122 12.04zM2.67 9.797a.5.5 0 00-.491.4A9.764 9.764 0 002 12.04a10 10 0 006.05 9.176.5.5 0 00.7-.458v-.827a2.5 2.5 0 01.631-1.662l1.359-1.53a3.5 3.5 0 00-.14-4.8l-1.118-1.12a3.477 3.477 0 00-2.475-1.024H2.67z"
      />
    </svg>
  );
};
export default LanguageIcon;
