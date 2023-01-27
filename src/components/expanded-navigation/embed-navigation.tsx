import { useState } from "react";
import Button from "../button/button";
import DownArrow from "../icons/downArrow";
import UpArrow from "../icons/upArrow";
interface Props {
  title?: string;
  tags?: Array<Object>;
  route?: string;
}
interface Object {
  tag_title?: string;
  route?: string;
}
const EmbedNavigation = (data: Props) => {
  const [visibility, setVisibility] = useState(false);

  const handleExpand = (e: any) => {
    let isExpanded = e.target.getAttribute("aria-expanded") === "true";
    e.target.setAttribute("aria-expanded", !isExpanded);
    setVisibility(isExpanded);
  };

  return (
    <nav className="flex-col w-full text-white">
      <Button
        aria-expanded={visibility}
        className="flex w-full items-center justify-between hover:bg-white/20 text-sm font-medium leading-5 py-2 cursor-pointer transition background-color 70ms ease-in 0s"
        onClick={handleExpand}
      >
        <div className="text-ellipsis text-sm cursor-pointer overflow-hidden py-2 ">
          {data.title}
        </div>
        <div>
          {visibility ? (
            <UpArrow height={18} width={18} />
          ) : (
            <DownArrow height={18} width={18} />
          )}
        </div>
      </Button>
      <div
        className={
          visibility
            ? "text-[8px] overflow-hidden  h-auto"
            : "text-[8px p-0 overflow-hidden h-0"
        }
      >
        {data.tags?.map((tag) => {
          return (
            <ul className="flex flex-col py-2 ">
              <li>
                <a
                  href={tag.route}
                  className=" relative p-0 text-white text-sm md:text-xs font-normal cursor-pointer hover:underline"
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
export default EmbedNavigation;
