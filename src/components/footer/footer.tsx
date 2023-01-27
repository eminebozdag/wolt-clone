import React from "react";
import EmbedNavigation from "../expanded-navigation/embed-navigation";
import WoltLogo from "../icons/woltLogo";
import Navigation from "../navigation/navigation";
import navigationData from "./footer.config";

const Footer = () => {
  return (
    <footer className="p-[6.5em] sm:p-[2.5em] bg-footer-gray">
      <div className="flex flex-col max-w-[1140px] m-auto">
        <div className="flex-1 flex flex-row sm:flex-col justify-between gap-8 mb-16 ">
          <div className="flex flex-col flex-[2_1_0%]">
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
                className="inline-block rounded-2 "
              >
                <img
                  aria-label="Download the Wolt iOS app on the App Store"
                  src="https://consumer-static-assets.wolt.com/app-store-badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  className="inline-block max-w-[100%] align-middle h-[2.5rem]"
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
                  className="inline-block max-w-[100%] align-middle h-10"
                ></img>
              </a>
            </div>
          </div>
          <div className="md:flex gap-6 flex-[7_1_0%] justify-end max-md:hidden">
            {navigationData.map((data) => (
              <Navigation {...data} />
            ))}
          </div>
          <div className="sm:flex flex-col md:hidden">
            {navigationData.map((data) => (
              <EmbedNavigation {...data} />
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
