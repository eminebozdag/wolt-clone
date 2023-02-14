import Layout from "../../components/layout/layout";
import { getBannerOfToday } from "./components/home-banner/banner.config";
import HomeBanner from "./components/home-banner/home-banner";
const DefaultPageTemplate = () => {
  const { color, image } = getBannerOfToday();

  return (
    <Layout>
      <main className="flex:[1_1_0%] z-0">
        <div>
          <HomeBanner color={color} image={image} />
        </div>
      </main>
    </Layout>
  );
};
export default DefaultPageTemplate;
