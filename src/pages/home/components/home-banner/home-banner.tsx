import clsx from "clsx";
import React, {useState} from "react";
import FilledLocationIcon from "../../../../components/icons/filled-location-icon";
import LocationIcon from "../../../../components/icons/location-icon";
import Input from "../../../../components/input";
import ShadowBackground from "../../../../components/shadow-background";
import TextAnimation from "./animation/text-animation";
interface Props {
	color: string;
	image: string;
}

const HomeBanner = ({color, image}: Props) => {
	const [val, setVal] = useState("");

	return (
		<div className={clsx("flex justify-center items-end overflow-hidden", "h-[560px] tabletL:h-[40rem]", color)}>
			<div className="relative flex justify-start items-end w-full h-full max-w-[75rem]">
				<img
					src={`/assets/banner-images/${image}.jpg`}
					loading="lazy"
					alt="daily_banner"
					className="absolute top-0 min-w-[50rem] right-[-40%] mobile:left-[30%]"
				/>
				<ShadowBackground type="default" className="mobile:hidden" />

				<div className={clsx("relative flex flex-col justify-center h-full min-w-[465px] z-20", "px-4 mobile:px-[30px]")}>
					<TextAnimation />

					<label
						className={clsx("font-header font-[600]", "mb-[14px] tabletL:mb-4", "text-base mobile:text-md", "text-c-white mobile:text-c-font-gray")}>
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
							}}></Input>
					</div>
					<div className="mt-10"></div>
				</div>
			</div>
		</div>
	);
};
export default HomeBanner;
