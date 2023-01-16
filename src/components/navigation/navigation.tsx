interface Props {
  title?: string;
  tags?: Array<Object>;
  route?: string;
}
interface Object {
  tag_title?: string;
  route?: string;
}

const Navigation = (data: Props) => {
  return (
    <nav className="flex-[1_1_0%] lg:max-w-[30%]">
      <label className="relative text-white opacity-75 leading-6 font-medium text-lg md:text-base">
        {data.title}
      </label>
      <div className="mt-[1.5rem]">
        {data.tags?.map((tag) => {
          return (
            <ul className="flex flex-col gap-[0.5rem] leading-8">
              <li>
                <a
                  href={tag.route}
                  className="relative p-0 text-white text-sm md:text-xs font-normal cursor-pointer hover:underline"
                >
                  {tag.tag_title}
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </nav>
  );
};
export default Navigation;
