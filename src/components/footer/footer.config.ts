import AccessibilityIcon from "../icons/accessibility-icon";
import LanguageIcon from "../icons/language-icon";
import PinIcon from "../icons/pin-icon";

export const NAVIGATION_DATA = [
  {
    title: "Let's do this together",
    tags: [
      {
        tag_title: "For couriers",
        route: "https://explore.wolt.com/en/deu/couriers",
      },
      {
        tag_title: "For restaurants",
        route: "https://wolt.com/en/merchants",
      },
      {
        tag_title: "For stores",
        route: "https://wolt.com/en/retailers",
      },
      {
        tag_title: "For companies",
        route: "https://wolt.com/en/wolt-at-work",
      },
      {
        tag_title: "Wolt Drive",
        route: "https://wolt.com/en/drive",
      },
    ],
  },

  {
    title: "Company",
    tags: [
      {
        tag_title: "About us",
        route: "https://wolt.com/en/about",
      },
      {
        tag_title: "Jobs",
        route: "https://careers.wolt.com/en",
      },
      {
        tag_title: "Responsibility",
        route: "https://wolt.com/en/responsibility",
      },
      {
        tag_title: "Security",
        route: "https://explore.wolt.com/en/deu/security",
      },
      {
        tag_title: "Investors",
        route: "https://ir.doordash.com/overview/default.aspx",
      },
    ],
  },

  {
    title: "Useful links",
    tags: [
      {
        tag_title: "Support",
        route: "https://explore.wolt.com/en/deu/help",
      },
      {
        tag_title: "Media",
        route: "https://press.wolt.com/en-WW/",
      },
      {
        tag_title: "Impressum",
        route: "https://explore.wolt.com/en/deu/impressum",
      },
    ],
  },

  {
    title: "Follow us",
    tags: [
      {
        tag_title: "Wolt Blog",
        route: "https://blog.wolt.com/fin/",
      },
      {
        tag_title: "Engineering Blog",
        route:
          "https://blog.wolt.com/engineering/?_gl=1*q0esvt*_ga*MTk1OTYwOTYzNC4xNjcyNTA1Nzgx*_ga_CP7Z2F7NFM*MTY3MzU0MDk2MS4xNC4xLjE2NzM1NDE1OTMuNDIuMC4w",
      },
      {
        tag_title: "Instagram",
        route: "https://www.instagram.com/woltapp/",
      },
      {
        tag_title: "Facebook",
        route: "https://www.facebook.com/woltapp/",
      },
      {
        tag_title: "Twitter",
        route: "https://twitter.com/woltapp",
      },
      {
        tag_title: "LinkedIn",
        route: "https://www.linkedin.com/company/wolt-oy/",
      },
    ],
  },
];

export const LEGAL_INFO = [
  {
    title: "Accessibility Statement",
    route: "https://explore.wolt.com/en/deu/accessibility-statement",
  },
  {
    title: "Terms and Conditions",
    route: "https://explore.wolt.com/en/deu/terms",
  },
  {
    title: "Privacy Policy",
    route: "https://explore.wolt.com/en/deu/privacy",
  },
];

export const SETTINGS = [
  { title: "Germany", Component: PinIcon },
  { title: "English", Component: LanguageIcon },
  { title: "Accessibility", Component: AccessibilityIcon },
];
