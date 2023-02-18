import AppleStoreIcon from "../../../../components/icons/store/app-store";
const DownloadApp = () => {
  return (
    <div className="flex flex-col w-full h-[758px] bg-c-section-gray mb-40 mt-24 overflow-hidden xs:h-auto xs:pt-16">
      <div className="relative flex flex-row xs:flex-col items-center max-w-[1200px] w-full h-full m-auto p-8 xs:p-0">
        <div className="absolute flex xs:hidden top-0 h-full w-full min-w-[1100px] overflow-hidden sm:right-[-50rem] md:right-[-44rem] lg:right-[-32rem]">
          <div>
            <img
              src="/assets/animation-images/ios-discovery.jpg"
              alt="ios-discovery"
              className="absolute z-10 h-full w-auto origin-top-left rotate-[-28.51deg] translate-x-[48px] translate-y-[140px] scale-[.79] skew-x-[13.83deg] skew-y-0"
            />
          </div>
          <img
            src="/assets/animation-images/front-cells.png"
            alt="front-cell"
            className="absolute z-20 object-cover h-full left-0"
          />
        </div>
        <div className="flex flex-col z-20 max-w-[40%] xs:max-w-full xs:p-4">
          <h2 className="font-header font-[400] text-[2.7rem] leading-[3.2rem] mb-10 text-c-font-gray">
            Honey, we’re not cooking tonight
          </h2>
          <p className="text-c-gray-medium text-sm leading-6 mb-10">
            Get the Apple-awarded Wolt app and choose from 40,000 restaurants
            and hundreds of stores in 20+ countries. Discover and get what you
            want – our courier partners bring it to you.
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href="https://wolt.onelink.me/Uy67?pid=not-available-web-to-app&c=not-available-web-to-app&af_adset=not-available-web-to-app&af_keywords=not-available-web-to-app&af_sub1=https%3A%2F%2Fwolt.com%2Fen&af_sub2=%2Fen%2Fdeu&af_r=https%3A%2F%2Fitunes.apple.com%2Ffi%2Fapp%2Fwolt%2Fid943905271%3Fmt%3D8"
              target="_blank"
              rel="noreferrer"
            >
              <AppleStoreIcon className="w-40 h-auto" />
            </a>
            <a
              href="https://wolt.onelink.me/Uy67?pid=not-available-web-to-app&c=not-available-web-to-app&af_adset=not-available-web-to-app&af_keywords=not-available-web-to-app&af_sub1=https%3A%2F%2Fwolt.com%2Fen&af_sub2=%2Fen%2Fdeu&af_r=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.wolt.android"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://static.wolt.com/images/android-en-096765c5c3aea81be926.png"
                alt="Download the Wolt Android app on Google Play"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
        <div className="hidden xs:flex ">
          <img
            src="/assets/animation-images/front-cells-mobile.jpg"
            alt="front-cells-mobile"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default DownloadApp;
