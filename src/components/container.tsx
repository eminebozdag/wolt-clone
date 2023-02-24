import clsx from "clsx";
interface Props {
  children?: any;
  className?: string;
}

const Container = (props: Props) => {
  const { children, className } = props;

  return (
    <div
      className={clsx("max-w-[1200px] px-[16px] mobile:px-[30px]", className)}
    >
      {children}
    </div>
  );
};

export default Container;
