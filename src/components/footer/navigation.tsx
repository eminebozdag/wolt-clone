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
		<nav className="flex-1 desktop:max-w-[20%]" data-testid="navigation-component">
			<label className="relative text-c-white/80 text-xs tabletL:text-sm">{data.title}</label>
			<div className="mt-[1.5rem]">
				<ul className="flex flex-col gap-1 tabletL:gap-2" data-testid="data-tags">
					{data.tags?.map((tag) => {
						return (
							<li key={tag.tag_title}>
								<a href={tag.route} className="text-c-white font-normal cursor-pointer hover:underline text-xxs tabletL:text-xs">
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
export default Navigation;
