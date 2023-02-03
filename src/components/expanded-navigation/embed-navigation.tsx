import { useState } from "react";
import Button from "../button/button";
import DownArrow from "../icons/downArrow";

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
    setVisibility(!visibility);
  };

  return (
    <nav className="flex flex-col w-full text-white">
      <Button
        aria-expanded={visibility}
        className="flex w-full items-center justify-between hover:bg-white/20  font-medium leading-5 py-2 cursor-pointer transition background-color 70ms ease-in 0s"
        onClick={handleExpand}
      >
        <div className="text-ellipsis text-xs cursor-pointer overflow-hidden ml-8">
          {data.title}
        </div>
        <div className="mr-8">
          {visibility ? (
            <DownArrow
              height={18}
              width={18}
              className="rotate-180"
              onClick={handleExpand}
            />
          ) : (
            <DownArrow height={18} width={18} onClick={handleExpand} />
          )}
        </div>
      </Button>
      <div
        className={
          visibility
            ? "text-xxs overflow-hidden h-auto pt-2 pb-4"
            : "text-xxs overflow-hidden h-0"
        }
      >
        {data.tags?.map((tag) => {
          return (
            <ul className="flex flex-col ml-8 py-1">
              <li>
                <a
                  href={tag.route}
                  className="text-white text-sm sm:text-xs font-normal cursor-pointer hover:underline"
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
