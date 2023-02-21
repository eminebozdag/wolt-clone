import DefaultPageTemplate from "./defaultPageTemplate/page";
import DiscoveryPageTemplate from "./discoveryPageTemplate/page";

const PAGES = [
  {
    title: "Default",
    route: "/",
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

export default PAGES;
