import React from "react";
import Button from "../button";
import EmbedNavigation from "../footer/components/expanded-navigation/embed-navigation";
import Navigation from "../footer/components/navigation/navigation";
import AccessibilityIcon from "../icons/accessibility-icon";
import LanguageIcon from "../icons/language-icon";
import LocationIcon from "../icons/pin-icon";
import WoltLogo from "../icons/wolt-logo";
import NAVIGATION_DATA from "./footer.config";

const Footer = () => {
  return (
    <footer className="pt-24 sm:pt-10 pb-10 bg-c-footer-gray">
      <div className="flex flex-col max-w-[1140px] m-auto">
        <div className="flex-1 flex flex-row sm:flex-col justify-between gap-8 mb-20">
          <div className="flex flex-col flex-[2_1_0%] px-8">
            <WoltLogo
              color={"white"}
              height={26}
              width={72}
              viewBox="0 0 64 24"
              className="mb-7"
            />
            <div className="flex sm:flex-nowrap flex-wrap gap-3">
              <a
                href="https://apps.apple.com/fi/app/wolt/id943905271?af_adset=wolt&af_keywords=wolt&af_sub1=https%3A%2F%2Fwww.google.com%2F&af_sub2=%2Fen%2Fdeu%2Fberlin&c=DEU_Web_FTU_Search_Brand_Berlin_EN&pid=google"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-2"
              >
                <img
                  aria-label="Download the Wolt iOS app on the App Store"
                  src="https://consumer-static-assets.wolt.com/app-store-badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  className="inline-block max-w-full align-middle h-[2.5rem]"
                ></img>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wolt.android&pid=google&c=DEU_Web_FTU_Search_Brand_Berlin_EN&af_adset=wolt&af_keywords=wolt&af_sub1=https://www.google.com/&af_sub2=/en/deu/berlin"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-2"
              >
                <img
                  aria-label="Download the Wolt Android app on Google Play"
                  src="https://consumer-static-assets.wolt.com/app-store-badges/google-play-badge_en.png"
                  className="inline-block max-w-full align-middle h-10"
                ></img>
              </a>
            </div>
          </div>
          <div className="md:flex gap-6 flex-[7_1_0%] justify-end max-md:hidden">
            {NAVIGATION_DATA.map((data) => (
              <Navigation {...data} />
            ))}
          </div>
          <div className="sm:flex flex-col md:hidden">
            {NAVIGATION_DATA.map((data) => (
              <EmbedNavigation {...data} />
            ))}
          </div>
        </div>
        <div className="flex flex-row sm:flex-col justify-between  px-8 text-xs md:text-xxs sm:text-xxs ">
          <div className="flex flex-row gap-4">
            <Button className="p-0 gap-1 text-c-white text-start hover:underline">
              <div className="flex items-center justify-center h-4 w-4 ">
                <LocationIcon height={10} width={10} />
              </div>
              Germany
            </Button>

            <Button className="p-0 gap-1 text-c-white text-start hover:underline">
              <div className="flex items-center justify-center h-4 w-4">
                <LanguageIcon height={10} width={10} />
              </div>
              English
            </Button>

            <Button className="p-0 gap-1 text-c-white text-start cursor-pointer hover:underline">
              <div className="flex items-center justify-center h-4 w-4">
                <AccessibilityIcon height={10} width={10} />
              </div>
              Accessibility
            </Button>
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center gap-x-6 gap-y-2 text-c-white ">
            <nav className="flex justify-between gap-6 items-center sm:text-c-white/75">
              <a
                href="https://explore.wolt.com/en/deu/accessibility-statement"
                className="hover:underline"
              >
                Accessibility Statement
              </a>
              <a
                href="https://explore.wolt.com/en/deu/terms"
                className="hover:underline"
              >
                Terms and Conditions
              </a>
              <a
                href="https://explore.wolt.com/en/deu/privacy"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            </nav>
            <div className="text-c-white/75">©️ Wolt 2014–2023</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
