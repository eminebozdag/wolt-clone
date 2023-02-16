import Button from "../../../../components/button/button";
import PlayIcon from "../../../../components/icons/playIcon";
const VideoSection = () => {
  return (
    <div className="relative items-center w-full h-[46rem] md:h-[40rem] sm:h-[20rem] mt-[6rem] pb-90 px-0 pt-0 bg-c-white bg-[linear-gradient(#ffff_50%,#0091EA_50%)] ">
      <div className="h-full my-0 mx-auto max-w:[1184px] bg-c-white clg:shadow-[rgba(0,0,0,0.2)_0px_0px_27px_0px]">
        <div className="flex relative h-full w-full text-start overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-[url('https://consumer-static-assets.wolt.com/frontpage-assets/video-cover-image-4.jpg')]"></div>
          <div className="flex max-w:[50%] w-[50%] h-full bg-cover bg-center max-lg:bg-transparent">
            <div className="absolute top-0 right-0 w-full h-full hidden cmd:block cmd:bg-c-font-gray/30"></div>
            <div className="relative flex flex-col justify-center flex-1 bg-c-white cmd:bg-transparent p-20">
              <h2 className="font-header font-[600] text-lg mb-16 items-start">
                What is Wolt?
              </h2>
              <p className="font-text text-[3rem] font-normal mb-10">
                Delivered.
              </p>
              <p className="font-normal leading-7 mb-10">
                Wolt makes it incredibly easy for you to discover and get what
                you want. Delivered to you – quickly, reliably and affordably.
              </p>
              <Button className="flex mr-auto cursor-pointer transition duration-150 ease-out hover:ease-in hover:scale-110 ">
                <div className="flex items-center justify-center bg-c-blue w-14 h-14 rounded-full shadow-lg ">
                  <PlayIcon />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
