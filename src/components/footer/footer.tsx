import WoltLogo from "../icons/woltLogo";
import Navigation from "../navigation/navigation";
import navigationData from "./footer.config";

const Footer = () => {
  return (
    <footer className="p-[6.5rem] bg-footer-gray md:px-[calc(2rem+env(safe-area-inset-bottom))] ">
      <div className="flex flex-col max-w-[1140px] m-auto">
        <div className="flex-1 flex flex-row justify-between gap-2 mb-[4rem] ">
          <div className="flex flex-col flex-[2_1_0%]">
            <WoltLogo
              height={26}
              width={72}
              viewBox="0 0 64 24"
              className="fill-white mb-[1.75rem]"
            />
            <div className="flex flex-wrap gap-[0.75rem]">
              <a
                href="https://apps.apple.com/fi/app/wolt/id943905271?af_adset=wolt&af_keywords=wolt&af_sub1=https%3A%2F%2Fwww.google.com%2F&af_sub2=%2Fen%2Fdeu%2Fberlin&c=DEU_Web_FTU_Search_Brand_Berlin_EN&pid=google"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-[0.375rem]"
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
                className="inline-block rounded-[0.375rem]"
              >
                <img
                  aria-label="Download the Wolt Android app on Google Play"
                  src="https://consumer-static-assets.wolt.com/app-store-badges/google-play-badge_en.png"
                  className="inline-block max-w-[100%] align-middle h-[2.5rem]"
                ></img>
              </a>
            </div>
          </div>
          <div className="flex gap-[1.5rem] flex-[7_1_0%] justify-end ">
            {navigationData.map((data) => (
              <Navigation {...data} />
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
