interface Props {
  title?: string;
  image?: string;
  route?: string;
}

const Card = (data: Props) => {
  const { title, image, route } = data;
  return (
    <div className="flex flex-1 flex-col text-center bg-c-section-gray cmd:mb-4 ">
      <img
        src={`/assets/card-images/${image}.jpg`}
        loading="lazy"
        alt="carousel_card"
        className="h-[300px] bg-center bg-cover"
      />

      <div className="flex flex-1 flex-col py-[37px] px-[39px]">
        <h3 className="font-header font-[600] text-[1.3rem] text-c-font-gray pb-4">
          {title}
        </h3>
        <a
          href={route}
          className="relative inline-block text-sm pb-1 text-c-blue mt-auto mx-auto  border-b-[1px] border-c-blue "
        >
          Apply now
        </a>
      </div>
    </div>
  );
};
export default Card;
