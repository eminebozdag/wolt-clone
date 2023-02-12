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
      <label className="relative text-white/75 font-medium text-base md:text-sm">
        {data.title}
      </label>
      <div className="mt-[1.5rem]">
        {data.tags?.map((tag) => {
          return (
            <ul className="flex flex-col leading-7">
              <li>
                <a
                  href={tag.route}
                  className="text-white text-sm md:text-xs font-normal cursor-pointer hover:underline"
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
