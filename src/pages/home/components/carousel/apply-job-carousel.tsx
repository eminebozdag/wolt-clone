import clsx from "clsx";
import Container from "../../../../components/container";
import Card from "./card";
import CARD_DATA from "./card.config";
const ApplyJobCarousel = () => {
  return (
    <Container
      className={clsx(
        "flex-col items-center px-[30px]",
        "mt-[56px] mobile:mt-[84px] tabletL:mt-24 desktop:mt-[100px] desktopM:mx-auto"
      )}
    >
      <h2
        className={clsx(
          "font-header text-c-font-gray leading-[3.2rem]",
          "font-[600] mobile:font-[400]",
          "text-normal mobile:text-xl tabletL:text-xxl",
          "px-[21px] tabletL:px-[24px]",
          "mt-[28px] mobile:mt-[35px] tabletL:mt-[40px] mb-[7px] tabletL:mb-2"
        )}
      >
        Hungry for more than food?
      </h2>
      <div
        className={clsx(
          "block desktop:flex w-full gap-6",
          "mt-[28px] mobile:mt-[35px] tabletL:mt-10"
        )}
      >
        {CARD_DATA.map((data) => (
          <Card {...data} />
        ))}
      </div>
    </Container>
  );
};
export default ApplyJobCarousel;
