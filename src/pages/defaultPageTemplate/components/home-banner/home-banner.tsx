import clsx from "clsx";
import TextAnimation from "./animation/text-animation";

const HomeBanner = () => {
  return (
    <div
      className={clsx(
        "flex justify-center items-end h-[40rem] overflow-hidden",
        "bg-yellow"
      )}
    >
      <div className="relative max-w-[75rem] w-full h-full flex justify-start items-end">
        <img
          src="https://consumer-static-assets.wolt.com/frontpage-assets/hero-images/0_Sunday.jpg"
          loading="lazy"
          alt="daily_image"
          className="absolute top-0 right-[-30%] w-100px min-h-full min-w-[62.5rem] object-cover opacity-100"
        />
        <div className="hidden xs:block absolute top-0 w-full h-full z-10 bg-gray/40"></div>
        <div className="relative flex flex-col justify-center h-full px-7 z-20">
          <TextAnimation />

          <label className="font-header font-[600] text-lg xs:text-white xs:text-base">
            Delivery address
          </label>
          <div className="relative flex"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
