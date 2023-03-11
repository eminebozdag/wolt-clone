import Layout from "components/layout";
import ApplyJobCarousel from "./carousel/apply-job-carousel";
import Countries from "./countries/countries";
import DownloadApp from "./download-app";
import {getBannerOfToday} from "./home-banner/banner.config";
import HomeBanner from "./home-banner/home-banner";
import Title from "./title";
import VideoSection from "./video-section";

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
