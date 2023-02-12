import Layout from "../../components/layout/layout";
import HomeBanner from "./components/home-banner/home-banner";
const DefaultPageTemplate = () => {
  return (
    <Layout>
      <main className="flex:[1_1_0%] z-0">
        <div>
          <HomeBanner />
        </div>
      </main>
    </Layout>
  );
};
export default DefaultPageTemplate;
