import clsx from "clsx";
import Container from "components/container";
import AppleStoreIcon from "components/icons/store/app-store";
import GooglePlayStore from "components/icons/store/play-store";
import React, {useEffect, useState} from "react";

const DownloadApp = () => {
	const DEFAULT_HEIGHT = [335, 2400, 2900];
	const [scrollPosition, setScrollPosition] = useState(DEFAULT_HEIGHT[0]);
	const handleScroll = () => {
		const position = window.pageYOffset;
		const [defaultHeight, min, max] = DEFAULT_HEIGHT;

		if (position > min && position < max) {
			const diff = position - min;
			const pos = diff - defaultHeight;
			setScrollPosition(-pos);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, {passive: true});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={clsx(
				"flex flex-col w-full bg-c-section-gray overflow-hidden",
				"h-auto mobile:h-[758px]",
				"mt-[100px] mb-[100px] pt-[56px] mobile:pt-0",
			)}>
			<Container className={clsx("relative items-center w-full h-full m-auto", "mobile:py-[30px]", "flex-col mobile:flex-row")}>
				<div
					className={clsx(
						"absolute top-0 h-full w-full min-w-[1100px] overflow-hidden",
						"hidden mobile:flex",
						"right-[-50rem] tablet:right-[-44rem] desktop:right-[-32rem]",
					)}>
					<div
						className={clsx(
							"absolute h-full w-auto z-10",
							"origin-top-left rotate-[-28.51deg]",
							"scale-[.53]",
							"skew-x-[13.83deg] skew-y-0",
							"translate-x-[-72px] translate-y-[10px] !important",
							"scroll-smooth",
						)}>
						<img src="/assets/animation-images/ios-discovery.jpg" alt="ios-discovery" style={{transform: `translate3d(0, ${scrollPosition}px, 0)`}} />
					</div>
					<img src="/assets/animation-images/front-cells.png" alt="front-cell" className="absolute object-cover h-full left-0 z-20" />
				</div>
				<div className={clsx("flex flex-col z-20", "max-w-full mobile:max-w-[60%] tablet:max-w-[45%]", "px-4 pt-4 pb-[21px] mobile:p-0")}>
					<h2 className={clsx("font-header font-[400] text-c-font-gray leading-[3.5rem] mb-10", "text-xl mobile:text-xxl")}>
						Honey, we’re not cooking tonight
					</h2>
					<p className="text-c-gray-medium leading-6 mb-10 text-xxs tablet:text-xs">
						Get the Apple-awarded Wolt app and choose from 40,000 restaurants and hundreds of stores in 20+ countries. Discover and get what you want – our
						courier partners bring it to you.
					</p>
					<div className="flex flex-col">
						<a
							href="https://wolt.onelink.me/Uy67?pid=not-available-web-to-app&c=not-available-web-to-app&af_adset=not-available-web-to-app&af_keywords=not-available-web-to-app&af_sub1=https%3A%2F%2Fwolt.com%2Fen&af_sub2=%2Fen%2Fdeu&af_r=https%3A%2F%2Fitunes.apple.com%2Ffi%2Fapp%2Fwolt%2Fid943905271%3Fmt%3D8"
							target="_blank"
							rel="noreferrer">
							<AppleStoreIcon className="mb-4 h-auto w-36 desktop:w-40" />
						</a>
						<a
							href="https://wolt.onelink.me/Uy67?pid=not-available-web-to-app&c=not-available-web-to-app&af_adset=not-available-web-to-app&af_keywords=not-available-web-to-app&af_sub1=https%3A%2F%2Fwolt.com%2Fen&af_sub2=%2Fen%2Fdeu&af_r=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.wolt.android"
							target="_blank"
							rel="noreferrer">
							<GooglePlayStore className="mb-4 w-36 desktop:w-40 h-auto desktop:h-auto" />
						</a>
					</div>
				</div>
				<div className="flex mobile:hidden">
					<img src="/assets/animation-images/front-cells-mobile.jpg" alt="front-cells-mobile" />
				</div>
			</Container>
		</div>
	);
};
export default DownloadApp;
