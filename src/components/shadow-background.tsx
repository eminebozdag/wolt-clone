import clsx from "clsx";
interface Props {
  type?: "modal" | "default";
  className?: string;
  children?: any;
}
const ShadowBackground = (props: Props) => {
  const { className, children, type } = props;
  const styles = {
    modal: clsx("fixed flex items-center justify-center z-40"),
    default: clsx("absolute hidden"),
  };
  return (
    <div
      className={clsx(
        "top-0 right-0 w-full h-full bg-c-font-gray/30",
        type && styles[type],
        className
      )}
    >
      {children}
    </div>
  );
};
export default ShadowBackground;
