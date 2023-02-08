import Button from "../../../../button/button";

interface Props {
  Component?: React.ReactNode;
  text?: string;
  style?: string;
}

const SocialLogin = ({ Component, text, style }: Props) => {
  return (
    <Button className="relative mt-2">
      <div className={style}>
        <div className="flex flex-row items-center">
          <div className="flex">{Component}</div>
          <div className="absolute font-semibold w-[90%]">{text}</div>
        </div>
      </div>
    </Button>
  );
};
export default SocialLogin;
