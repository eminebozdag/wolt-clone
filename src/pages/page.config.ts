import DefaultPageTemplate from "./defaultPageTemplate/page";
import DiscoveryPageTemplate from "./discoveryPageTemplate/page";

const pages = [
  {
    title: "Default",
    route: "/en",
    exact: true,
    Component: DefaultPageTemplate,
  },
  {
    title: "Discovery",
    route: "en/discovery",
    exact: false,
    Component: DiscoveryPageTemplate,
  },
];

export default pages;
