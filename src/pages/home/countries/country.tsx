import clsx from "clsx";
import DownArrow from "components/icons/down-arrow";
interface Props {
	country?: string;
	route?: string;
}

const Country = (data: Props) => {
	const {country, route} = data;
	return (
		<a
			href={route}
			className={clsx(
				"flex items-center justify-between p-4 rounded-4 border-1 border-c-gray text-c-font-gray",
				"hover:text-c-blue hover:shadow-c-sm",
				"transition ease-in duration-150",
			)}
			data-testid="country-component">
			<span className="whitespace-nowrap text-ellipsis overflow-visible">
				<span className="flex justify-start items-center">
					<span className="flex mr-4">
						<img src={`/assets/flags/${country}.svg`} alt={`${country}_flag`} className="w-6 rounded-4 shadow-md" />
					</span>
					<span title="country_name" className="text-sm tabletL:text-base py-0 tabletL:py-1">
						{country}
					</span>
				</span>
			</span>

			<span className="flex items-center">
				<span className="inline-flex">
					<DownArrow height={20} width={20} className="rotate-[270deg] fill-c-font-gray" />
				</span>
			</span>
		</a>
	);
};
export type {Props};
export default Country;
