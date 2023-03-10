import clsx from "clsx";
import React from "react";
import Button from "../button";
import AppleStoreIcon from "../icons/store/app-store";
import GooglePlayStore from "../icons/store/play-store";
import WoltLogo from "../icons/wolt-logo";
import AccordionNavigation from "./accordion-nav";
import {LEGAL_INFO, NAVIGATION_DATA, SETTINGS} from "./footer.config";
import Navigation from "./navigation";

const Footer = () => {
	return (
		<footer
			className={clsx("bg-c-footer-gray", "px-4 pb-[28px] tabletL:pb-8", "pt-[36.750px] mobile:px-[30px] tablet:pt-[91px] tabletL:pt-[104px]")}
			data-testid="footer-component">
			<div className="flex flex-col max-w-[1140px] m-auto">
				<div className={clsx("flex-1 flex justify-between gap-8", "flex-col tablet:flex-row", "mb-[91px] tabletL:mb-[104px]")}>
					<div className="flex flex-col flex-[2_1_0%]">
						<WoltLogo color="white" height={26} width={72} className="mb-[24.5px] mobile:mb-7" />
						<div className="flex gap-3 flex-nowrap mobile:flex-wrap">
							<AppleStoreIcon className="h-[33px] tabletL:h-[41px]" />
							<GooglePlayStore className="h-[32px] tabletL:h-[40px]" />
						</div>
					</div>
					<div className="flex-[7_1_0%] justify-end gap-8 hidden tablet:flex">
						{NAVIGATION_DATA.map((data) => (
							<Navigation key={data.title} {...data} />
						))}
					</div>
					<div className="flex tablet:hidden flex-col mx-[-15px] mobile:mx-[-30px]">
						{NAVIGATION_DATA.map((data) => (
							<AccordionNavigation key={data.title} {...data} />
						))}
					</div>
				</div>
				<div className={clsx("flex justify-between gap-4 flex-wrap", "flex-col tabletM:flex-row", "text-cxs tabletL:text-xxs")}>
					<div className="flex flex-row flex-wrap gap-4 mobile:gap-6">
						{SETTINGS.map((data) => (
							<Button variant="flat" key={data.title}>
								<div className="flex justify-center items-center h-4 w-4">{<data.Component height={10} width={10} />}</div>
								{data.title}
							</Button>
						))}
					</div>
					<div className="flex flex-row flex-wrap justify-between items-center gap-2">
						<nav className="flex justify-between items-center gap-6 text-c-white/75 tablet:text-c-white">
							{LEGAL_INFO.map((data) => (
								<a key={data.title} href={data.route} className="hover:underline">
									{data.title}
								</a>
							))}
						</nav>
						<div className="text-c-white/75 tablet:ml-[2.5rem]">©️ Wolt 2014–2023</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
