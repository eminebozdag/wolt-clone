import Button from "../../../../components/button/button";
import PlayIcon from "../../../../components/icons/playIcon";
const VideoSection = () => {
  return (
    <div className="relative items-center w-full h-[46rem] mt-[6rem] pb-90 bg-c-white bg-[linear-gradient(#ffff_50%,#0091EA_50%)] ">
      <div className="h-full my-0 mx-auto max-w:[1184px] bg-c-white shadow-lg">
        <div className="flex relative h-full w-full text-start overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://consumer-static-assets.wolt.com/frontpage-assets/video-cover-image-4.jpg')]"></div>
          <div className="flex max-w:[50%] w-[50%] h-full bg-cover bg-center bg-transparent">
            <div className="absolute top-0 left-0 w-full h-full hidden"></div>
            <div className="relative flex flex-col justify-center flex-1 bg-c-white p-20">
              <h2 className="bg-c-blue font-header font-[600] text-lg mb-16 items-start">
                What is Wolt?
              </h2>
              <p className="font-text text-[3rem] font-normal mb-10">
                Delivered.
              </p>
              <p className="font-normal leading-7 mb-10">
                Wolt makes it incredibly easy for you to discover and get what
                you want. Delivered to you – quickly, reliably and affordably.
              </p>
              <Button className="flex mr-auto cursor-pointer">
                <div className="flex items-center justify-center bg-c-blue w-14 h-14 rounded-full shadow-lg transition hover:ease-in-out duration-300 ">
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
