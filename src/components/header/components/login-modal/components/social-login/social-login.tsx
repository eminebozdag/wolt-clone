import Button from "../../../../../button";

interface Props {
  Component?: React.ReactNode;
  text?: string;
  style?: string;
  type?: "primary" | "secondary" | "outline";
}

const SocialLogin = ({ Component, text, style, type }: Props) => {
  return (
    <div className="relative mt-2">
      <Button variant={type} className={style}>
        <div className="flex flex-row items-center">
          <div className="flex">{Component}</div>
          <div className="absolute w-[90%]">{text}</div>
        </div>
      </Button>
    </div>
  );
};
export default SocialLogin;
