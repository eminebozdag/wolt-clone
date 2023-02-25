import clsx from "clsx";
import { useState } from "react";
import Button from "../../../components/button";
import PlayIcon from "../../../components/icons/play-icon";
import ShadowBackground from "../../../components/shadow-background";

const VideoSection = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={clsx(
        "relative items-center mt-[90px] bg-c-white bg-[linear-gradient(#ffff_50%,#F8F8F8_50%)]",
        "h-[20rem] mobile:h-[550px] desktop:h-[640px] desktopM:h-[730px]",
        "pb-0 desktopM:pb-[90px]"
      )}
    >
      <div className="max-w-[1184px] my-0 mx-auto h-full shadow-c-md">
        <div className="flex relative h-full w-full text-start overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-[url('https://consumer-static-assets.wolt.com/frontpage-assets/video-cover-image-4.jpg')]"></div>
          <div className="flex w-[50%]">
            <ShadowBackground type="default" className="desktop:hidden" />

            <div
              className={clsx(
                "relative flex flex-1 flex-col justify-center",
                "bg-transparent desktop:bg-c-white",
                "py-8 px-6 mobile:p-[56px]",
                "desktopM:pt-[72px] desktopM:pb-9 desktopM:pl-[118px] desktopM:pr-[96px]"
              )}
            >
              <h2
                className={clsx(
                  "font-header font-[600] mb-16 items-start",
                  "text-c-white desktop:text-c-font-gray",
                  "flex flex-1 desktop:flex-none",
                  "text-sm mobile:text-base tabletL:text-md"
                )}
              >
                What is Wolt?
              </h2>
              <p
                className={clsx(
                  "font-header mb-8",
                  "font-[600] mobile:font-[400]",
                  "text-normal mobile:text-xl tabletL:text-xxl",
                  "text-c-white desktop:text-c-font-gray"
                )}
              >
                Delivered.
              </p>
              <p className="font-normal leading-7 mb-10 hidden desktop:block">
                Wolt makes it incredibly easy for you to discover and get what
                you want. Delivered to you – quickly, reliably and affordably.
              </p>
              <Button
                className="flex mr-auto"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div
                  className={clsx(
                    "flex items-center justify-center rounded-full shadow-lg",
                    "bg-c-white desktop:bg-c-blue",
                    "h-[35px] mobile:h-14 tabletL:h-[60px]",
                    "w-[35px] mobile:w-14 tabletL:w-[60px]",
                    hover && "transition duration-300 ease-in-out scale-110"
                  )}
                >
                  <PlayIcon
                    className={clsx(
                      "fill-c-font-gray desktop:fill-c-white",
                      "h-10 mobile:h-14",
                      "w-10 mobile:w-14"
                    )}
                  />
                </div>
                <span
                  className={clsx(
                    "text-c-blue my-auto ml-3",
                    "text-base desktop:text-md",
                    "hidden mobile:inline-flex"
                  )}
                >
                  Watch video
                </span>
              </Button>
            </div>
          </div>

          <div
            className={clsx(
              "absolute top-0 left-0 w-full h-full my-0 mx-auto pointer-events-none",
              "hidden desktop:block"
            )}
          >
            <div
              className={clsx(
                "absolute w-[50%] h-full right-0",
                "bg-cover bg-center bg-[url('https://consumer-static-assets.wolt.com/frontpage-assets/video-cover-image-4.jpg')]"
              )}
            ></div>
            <video
              className="relative w-full h-full object-cover top-0 left-[-150%] z-50
              transition transform duration-75 ease-[cubic-bezier(0.17, 0.67, 0.24, 0.99)] "
              preload={"metadata"}
              playsInline
              poster="https://consumer-static-assets.wolt.com/frontpage-assets/video-cover-image-4.jpg"
              tabIndex={-1}
              src="https://consumer-static-assets.wolt.com/frontpage-assets/Wolt_Brand_Film_2020.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
