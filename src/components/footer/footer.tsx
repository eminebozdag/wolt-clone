import Button from "../button/button";
import UpArrow from "../icons/upArrow";
import WoltLogo from "../icons/woltLogo";
import Navigation from "../navigation/navigation";
import navigationData from "./footer.config";

const Footer = () => {
  return (
    <footer className=" p-[6.5em] sm:p-[2.5em] bg-footer-gray ">
      <div className="flex flex-col max-w-[1140px] m-auto">
        <div className="flex-1 flex flex-row sm:flex-col justify-between gap-[2rem] mb-[4rem] ">
          <div className="flex flex-col flex-[2_1_0%]">
            <WoltLogo
              height={26}
              width={72}
              viewBox="0 0 64 24"
              className="fill-white mb-[1.75rem]"
            />
            <div className="flex sm:flex-nowrap flex-wrap gap-[0.75rem]">
              <a
                href="https://apps.apple.com/fi/app/wolt/id943905271?af_adset=wolt&af_keywords=wolt&af_sub1=https%3A%2F%2Fwww.google.com%2F&af_sub2=%2Fen%2Fdeu%2Fberlin&c=DEU_Web_FTU_Search_Brand_Berlin_EN&pid=google"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-[0.375rem] "
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
          <div className="md:flex gap-[1.5rem] flex-[7_1_0%] justify-end max-md:hidden">
            {navigationData.map((data) => (
              <Navigation {...data} />
            ))}
          </div>
          <div className="sm:flex md:hidden p-0 m-0 bg-blue">
            <nav className="text-white">
              <Button className="flex items-center w-[100%] text-start text-sm font-medium leading-5 ptb-[0.5rem] cursor-pointer transition background-color 70ms ease-in 0s">
                <div className="text-ellipsis overflow-hidden">
                  Let's do this together
                </div>
                <div className="flex items-center justify-center ">
                  <UpArrow height={24} width={24} />
                </div>
              </Button>
              <div></div>
            </nav>
          </div>
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
