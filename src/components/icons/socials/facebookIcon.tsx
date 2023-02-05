import SVGProps from "../types";
const FacebookIcon = ({ height, width, className, ...props }: SVGProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={className}
    >
      <path
        d="M16.0978 8.04889C16.0978 3.60361 12.4942 0 8.04889 0C3.60361 0 0 3.60361 0 8.04889C0 12.0663 2.94336 15.3962 6.79125 16V10.3755H4.74759V8.04889H6.79125V6.27562C6.79125 4.25836 7.99289 3.1441 9.83143 3.1441C10.7121 3.1441 11.6332 3.3013 11.6332 3.3013V5.28208H10.6182C9.61835 5.28208 9.30654 5.90253 9.30654 6.53906V8.04889H11.5388L11.182 10.3755H9.30653V16C13.1544 15.3962 16.0978 12.0663 16.0978 8.04889Z"
        fill="white"
      ></path>
    </svg>
  );
};
export default FacebookIcon;
