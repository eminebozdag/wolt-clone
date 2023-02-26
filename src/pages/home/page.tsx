import Layout from "../../components/layout";
import ApplyJobCarousel from "./components/carousel/apply-job-carousel";
import Countries from "./components/countries/countries";
import DownloadApp from "./components/download-app";
import {getBannerOfToday} from "./components/home-banner/banner.config";
import HomeBanner from "./components/home-banner/home-banner";
import Title from "./components/title";
import VideoSection from "./components/video-section";

const HomePage = () => {
	const {color, image} = getBannerOfToday();

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
		</Layout>
	);
};

export default HomePage;
