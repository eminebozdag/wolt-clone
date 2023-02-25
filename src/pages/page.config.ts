import DiscoveryPage from "./discovery/page";
import HomePage from "./home/page";

const PAGES = [
  {
    title: "Default",
    route: "/",
    exact: true,
    Component: HomePage,
  },
  {
    title: "Discovery",
    route: "en/discovery",
    exact: false,
    Component: DiscoveryPage,
  },
];

export default PAGES;
