import clsx from "clsx";
import FilledLocationIcon from "components/icons/filled-location-icon";
import LocationIcon from "components/icons/location-icon";
import Input from "components/input";
import ShadowBackground from "components/shadow-background";
import React, {useState} from "react";
import TextAnimation from "./animation/text-animation";
interface Props {
	color?: string;
	image?: string;
}

const HomeBanner = ({color, image}: Props) => {
	const [val, setVal] = useState("");

	return (
		<div className={clsx("flex justify-center items-end overflow-hidden", "h-[560px] tabletL:h-[40rem]", color)} data-testid="home-banner-component">
			<div className="relative flex justify-start items-end max-w-[75rem] w-full h-full">
				<img
					src={`/assets/banner-images/${image}.jpg`}
					loading="lazy"
					alt={`${image}_banner`}
					className="absolute top-0 min-w-[50rem] right-[-40%] mobile:left-[30%]"
				/>
				<ShadowBackground type="component" className="mobile:hidden" />

				<div
					className={clsx("relative flex flex-col justify-center h-full w-full z-20", "px-4 mobile:px-[30px]", "max-w-[465px] tabletL:max-w-[33.375rem]")}>
					<TextAnimation />

					<label className={clsx("font-header font-[600]", "mb-[14px] tabletL:mb-4", "text-base tabletL:text-md", "text-c-white mobile:text-c-font-gray")}>
						Delivery address
					</label>

					<div className="relative flex flex-col">
						<Input
							label="Choose a delivery address"
							type="text"
							value={val}
							onChange={(e: any) => setVal(e.target.value)}
							start={{
								before: <LocationIcon height={20} width={20} />,
								after: <FilledLocationIcon height={20} width={20} />,
							}}
						/>
					</div>
					<div className="mt-10"></div>
				</div>
			</div>
		</div>
	);
};
export type {Props};
export default HomeBanner;
