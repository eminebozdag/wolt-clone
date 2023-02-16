import Layout from "../../components/layout/layout";
import Countries from "./components/countries/countries";
import { getBannerOfToday } from "./components/home-banner/banner.config";
import HomeBanner from "./components/home-banner/home-banner";
import Title from "./components/title/title";
import VideoSection from "./components/video-section/video-section";
const DefaultPageTemplate = () => {
  const { color, image } = getBannerOfToday();

  return (
    <Layout>
      <main className="flex:1 z-0">
        <div>
          <HomeBanner color={color} image={image} />
          <Countries />
          <VideoSection />
          <Title />
        </div>
      </main>
    </Layout>
  );
};
export default DefaultPageTemplate;
