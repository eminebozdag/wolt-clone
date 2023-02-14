import Layout from "../../components/layout/layout";
import Countries from "./components/countries/countries";
import { getBannerOfToday } from "./components/home-banner/banner.config";
import HomeBanner from "./components/home-banner/home-banner";
const DefaultPageTemplate = () => {
  const { color, image } = getBannerOfToday();

  return (
    <Layout>
      <main className="flex:[1_1_0%] z-0">
        <div>
          <HomeBanner color={color} image={image} />
          <Countries />
        </div>
      </main>
    </Layout>
  );
};
export default DefaultPageTemplate;
