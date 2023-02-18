interface SVGProps extends React.SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
  className?: string;
  viewBox?: string;
  ariaLabel?: string;
  onClick?(e: any): void;
}

export default SVGProps;
