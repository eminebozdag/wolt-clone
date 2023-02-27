import clsx from "clsx";
import Container from "components/container";
import COUNTRIES from "./countries.config";
import Country from "./country";

const Countries = () => {
	return (
		<Container className="flex-col w-full bg-c-white m-auto px-4 py-10 mobile:py-[84px] tabletL:py-[130px] ">
			<section className={clsx("flex justify-between items-center", "mobile:mb-4 tablet:mb-8 tabletM:mb-14")}>
				<h2
					className={clsx(
						"font-header text-c-font-gray",
						"font-[600] mobile:font-[400]",
						"text-normal mobile:text-xl tabletL:text-xxl",
						"mobile:mb-[7px]",
						"mobile:leading-[3.5rem]",
					)}>
					Explore countries where you find Wolt
				</h2>
			</section>
			<div>
				<div className="flex-1 grid gap-x-6 gap-y-2 mobile:gap-y-4 grid-cols-1 mobile:grid-cols-auto">
					{COUNTRIES.map((data) => (
						<Country {...data} />
					))}
				</div>
			</div>
		</Container>
	);
};
export default Countries;
