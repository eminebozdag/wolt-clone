import Card from "./card";
import CARD_DATA from "./card.config";
const ApplyJobCarousel = () => {
  return (
    <div className="max-w-[1200px] text-center mt-[6.25rem] mx-auto mb-0 px-8 py-0 md:mt-[6rem] sm:mt-[4rem]">
      <h2 className="font-header font-[400] text-[2.7rem] md:text-[2.5rem] csm:text-[2.3rem] xs:font-[600] xs:text-[1.5rem] leading-[3.2rem] mb-10 text-c-font-gray">
        Hungry for more than food?
      </h2>
      <div className="flex cmd:block mt-10 xs:mt-8">
        {CARD_DATA.map((data) => (
          <Card {...data} />
        ))}
      </div>
    </div>
  );
};
export default ApplyJobCarousel;
