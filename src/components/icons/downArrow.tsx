import SVGProps from "./types";
const DownArrow = ({
  height,
  width,
  className,
  onClick,
  ...props
}: SVGProps) => {
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
    >
      <path d="M12.1768 13.409C12.0791 13.5066 11.9209 13.5066 11.8232 13.409L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12.1768 13.409Z" />
    </svg>
  );
};
export default DownArrow;
