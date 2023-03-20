import clsx from "clsx";
import Button from "components/button";
import AccordionNavigation from "components/footer/accordion-nav";
import {LEGAL_INFO, NAVIGATION_DATA, SETTINGS} from "components/footer/footer.config";
import Navigation from "components/footer/navigation";
import AppleStoreIcon from "components/icons/store/app-store";
import GooglePlayStore from "components/icons/store/play-store";
import WoltLogo from "components/icons/wolt-logo";
import React from "react";

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
							<AppleStoreIcon className="h-[32px] tabletL:h-[41px]" />
							<GooglePlayStore className="h-[32px] tabletL:h-[40px]" />
						</div>
					</div>
					<div className="flex-[7_1_0%] justify-end gap-8 hidden tablet:flex">
						{NAVIGATION_DATA.map((data, index) => (
							<Navigation key={index} {...data} />
						))}
					</div>
					<div className="flex tablet:hidden flex-col mx-[-15px] mobile:mx-[-30px]">
						{NAVIGATION_DATA.map((data, index) => (
							<AccordionNavigation key={index} {...data} />
						))}
					</div>
				</div>
				<div className={clsx("flex justify-between gap-4 flex-wrap", "flex-col tabletM:flex-row", "text-cxs tabletL:text-xxs")}>
					<div className="flex flex-row flex-wrap gap-4 mobile:gap-6">
						{SETTINGS.map((data, index) => (
							<Button variant="flat" key={index}>
								<div className="flex justify-center items-center h-4 w-4">{<data.Component height={10} width={10} />}</div>
								{data.title}
							</Button>
						))}
					</div>
					<div className="flex flex-row flex-wrap justify-between items-center gap-2">
						<nav className="flex justify-between items-center gap-6 text-c-white/75 tablet:text-c-white">
							{LEGAL_INFO.map((data, index) => (
								<a key={index} href={data.route} className="hover:underline">
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
