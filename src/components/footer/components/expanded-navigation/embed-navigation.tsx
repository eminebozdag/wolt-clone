import clsx from "clsx";
import { useState } from "react";
import Button from "../../../button";
import DownArrow from "../../../icons/down-arrow";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="flex flex-col w-full text-c-white">
      <Button
        className="hover:bg-c-white/20 rounded-none font-medium leading-5 py-2 transition delay-70ms ease-in"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <div className="flex flex-row w-full justify-between px-4">
          <div className="text-ellipsis text-xs cursor-pointer overflow-hidden">
            {data.title}
          </div>
          <div className="">
            {
              <DownArrow
                height={18}
                width={18}
                className={clsx("fill-c-white", isExpanded ? "rotate-180" : "")}
              />
            }
          </div>
        </div>
      </Button>
      <div
        className={clsx(
          "text-xxs overflow-hidden px-8",
          isExpanded ? "pt-2 pb-4" : "h-0"
        )}
      >
        {data.tags?.map((tag) => {
          return (
            <ul className="flex flex-col py-1">
              <li>
                <a
                  href={tag.route}
                  className="text-c-white text-sm sm:text-xs font-normal cursor-pointer hover:underline"
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
