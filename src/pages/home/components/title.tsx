import clsx from "clsx";
const Title = () => {
	return (
		<div className={clsx("max-w-[1200px] text-center text-c-font-gray", "pt-[60px] mobile:pt-[130px] desktopM:mx-auto")}>
			<div className="px-[21px] mobile:px-[49px] tabletL:px-[56px] desktop:px-0">
				<h3
					className={clsx(
						"font-header font-[600] mobile:font-normal",
						"text-normal mobile:text-xl",
						"mb-[7px] desktop:mb-2",
						"pb-[21px] tabletL:pb-[24px] desktop:pb-10",
					)}>
					Did you know?
				</h3>
				<p className={clsx("max-w-[45rem] mx-auto font-normal", "text-sm mobile:text-base desktop:text-normal", "leading-6 desktop:leading-10")}>
					Getting home-delivered sushi is more than your life made easy. When you order with Wolt, you help thousands of hard-working restaurant and store
					owners and couriers make a living.
				</p>
			</div>
		</div>
	);
};
export default Title;
