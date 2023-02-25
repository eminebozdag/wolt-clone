import clsx from "clsx";
interface Props {
  title?: string;
  image?: string;
  route?: string;
}

const Card = (data: Props) => {
  const { title, image, route } = data;
  return (
    <div
      className={clsx(
        "flex flex-1 flex-col max-w-[640px] text-center bg-c-section-gray",
        "mx-4 mobile:mx-0 mobileM:mx-auto",
        "my-[11px] mobile:my-4 desktop:my-0"
      )}
    >
      <img
        src={`/assets/card-images/${image}.jpg`}
        loading="lazy"
        alt="carousel_card"
        className="h-[300px] bg-center bg-cover"
      />

      <div
        className={clsx(
          "flex flex-col flex-1 justify-between",
          "py-[30px] mobile:py-[37px]",
          "px-[25px] mobile:px-[39px]"
        )}
      >
        <h3
          className={clsx(
            "font-header font-[600] text-c-font-gray",
            "text-base desktop:text-md",
            "pb-[14px] tabletL:pb-4"
          )}
        >
          {title}
        </h3>
        <a
          href={route}
          className={clsx(
            "relative inline-block text-xs text-c-blue pb-1",
            "border-b-1 border-c-blue",
            "mx-auto desktopM:mt-[24px]"
          )}
        >
          Apply now
        </a>
      </div>
    </div>
  );
};
export default Card;
