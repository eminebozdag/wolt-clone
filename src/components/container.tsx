interface Props {
  children?: any;
}

const Container = ({ children }: Props) => {
  return <div className="px-[105.5px]">{children}</div>;
};

export default Container;
