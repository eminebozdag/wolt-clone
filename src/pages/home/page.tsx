import LoginModal from "components/header/login-modal/login-modal";
import Layout from "components/layout";
import ShadowBackground from "components/shadow-background";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dispatchShowLoginModal} from "store/actions/globalActions";
import ApplyJobCarousel from "./carousel/apply-job-carousel";
import Countries from "./countries/countries";
import DownloadApp from "./download-app";
import {getBannerOfToday} from "./home-banner/banner.config";
import HomeBanner from "./home-banner/home-banner";
import Title from "./title";
import VideoSection from "./video-section";

const HomePage = () => {
	const {color, image} = getBannerOfToday();

	const {showLoginModal} = useSelector((state: any) => state.globalReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		showLoginModal && (document.body.style.overflow = "hidden");
		return () => {
			document.body.style.overflow = "scroll";
		};
	});

	const handleDispatch = () => {
		dispatch(dispatchShowLoginModal(false));
	};

	return (
		<Layout>
			<main className="flex:1 z-0">
				<div>
					<HomeBanner color={color} image={image} />
					<Countries />
					<VideoSection />
					<Title />
					<DownloadApp />
					<ApplyJobCarousel />
					<div className="pb-[12.5rem]"></div>
				</div>
			</main>

			{showLoginModal && (
				<ShadowBackground type="modal">
					<LoginModal onClickAway={handleDispatch} />
				</ShadowBackground>
			)}
		</Layout>
	);
};

export default HomePage;
