import clsx from "clsx";
import { useState } from "react";
import Button from "../../../../components/button/button";
import PlayIcon from "../../../../components/icons/playIcon";
const VideoSection = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative items-center w-full h-[46rem] pb-[90px] lg:h-[40rem] md:h-[34rem] csm:h-[34rem] xs:h-[20rem] lg:pb-0 cmd:pb-0 mt-[6rem] bg-c-white bg-[linear-gradient(#ffff_50%,#EEEEEE_50%)] ">
      <div className="max-w-[1184px] h-full my-0 mx-auto bg-c-white shadow-[rgba(0,0,0,0.05)_0px_0px_50px_0px]">
        <div className="flex relative h-full w-full text-start overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-cover cmd:bg-cover bg-[url('https://consumer-static-assets.wolt.com/frontpage-assets/video-cover-image-4.jpg')]"></div>
          <div className="flex max-w-[50%] h-full bg-cover bg-center max-lg:bg-transparent">
            <div className="absolute top-0 right-0 w-full h-full hidden cmd:block cmd:bg-c-font-gray/30"></div>
            <div className="relative flex flex-col justify-center flex-1 bg-c-white cmd:bg-transparent p-20">
              <h2 className="font-header font-[600] text-lg mb-16 items-start cmd:text-c-white cmd:flex-1 xs:text-sm">
                What is Wolt?
              </h2>
              <p className="font-text text-[3rem] font-normal mb-10 cmd:text-c-white xs:font-header xs:font-[600] xs:text-[1.5rem]">
                Delivered.
              </p>
              <p className="font-normal leading-7 mb-10 cmd:hidden">
                Wolt makes it incredibly easy for you to discover and get what
                you want. Delivered to you – quickly, reliably and affordably.
              </p>
              <Button
                className="flex mr-auto cursor-pointer"
                aria-label="Show me"
                tabIndex="0"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div
                  className={clsx(
                    "flex items-center justify-center bg-c-blue cmd:bg-c-white w-15 h-15 xs:h-10 xs:w-10 rounded-full shadow-lg ",
                    hover && "transition duration-300 ease-in-out scale-110"
                  )}
                >
                  <PlayIcon className="fill-c-white cmd:fill-c-font-gray h-14 w-14 xs:h-10 xs:w-10" />
                </div>
                <span className="inline-flex my-auto ml-3 text-c-blue text-lg xs:hidden">
                  Watch video
                </span>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full my-0 mx-auto pointer-events-none">
            <div className="absolute w-[50%] h-full right-0 bg-cover cmd:hidden bg-center bg-[url('https://consumer-static-assets.wolt.com/frontpage-assets/video-cover-image-4.jpg')]"></div>
            <video
              className="relative w-full h-full object-cover top-0 left-[50%] 
              transition transform duration-75 ease-[cubic-bezier(0.17, 0.67, 0.24, 0.99)] delay-[0ms]"
              preload={"metadata"}
              playsInline
              poster="https://consumer-static-assets.wolt.com/frontpage-assets/video-cover-image-4.jpg"
              tabIndex={-1}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
