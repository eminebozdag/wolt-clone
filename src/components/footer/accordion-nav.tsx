import clsx from "clsx";
import {useState} from "react";
import Button from "../button";
import DownArrow from "../icons/down-arrow";

interface Props {
	title?: string;
	tags?: Array<Object>;
	route?: string;
}
interface Object {
	tag_title?: string;
	route?: string;
}
const AccordionNavigation = (data: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<nav className="flex flex-col w-full">
			<Button
				variant="secondary"
				className="text-c-white py-[7px] px-[30px] rounded-none delay-70ms"
				hover
				onClick={() => {
					setIsExpanded(!isExpanded);
				}}>
				<div className="flex flex-row justify-between items-center w-full h-[21px]">
					<span className="text-xxs text-ellipsis cursor-pointer overflow-hidden">{data.title}</span>

					{<DownArrow height={20} width={20} className={clsx("fill-c-white/50", isExpanded && "rotate-180")} />}
				</div>
			</Button>
			<div className={clsx("text-xxs overflow-hidden", isExpanded ? "pl-[30px]" : "h-0")}>
				<ul className="flex flex-col pt-[10.5px] pb-[21px] gap-2">
					{data.tags?.map((tag) => {
						return (
							<li>
								<a href={tag.route} className="text-c-white text-xxs cursor-pointer hover:underline">
									{tag.tag_title}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
export default AccordionNavigation;