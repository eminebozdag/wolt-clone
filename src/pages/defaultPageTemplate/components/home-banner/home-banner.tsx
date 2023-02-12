import clsx from "clsx";
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
          className="absolute top-0 left-[28%] w-auto min-h-full min-w-[62.5rem] object-cover opacity-100"
        />
        <div className="relative w-[34rem] flex flex-col justify-center h-full px-7">
          <label>Delivery address</label>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
