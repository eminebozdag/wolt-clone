interface Props {
  title?: string;
  image?: string;
  route?: string;
}

const Card = (data: Props) => {
  const { title, image, route } = data;
  return (
    <div className="flex flex-1 flex-col mr-6 text-center bg-c-section-gray">
      <img
        src={`/assets/card-images/${image}.jpg`}
        loading="lazy"
        alt="carousel_card"
        className="h-[300px] w-full bg-cover bg-center"
      />

      <div className="flex flex-1 flex-col py-[37px] px-[39px]">
        <h3 className="font-header font-[600] text-[1.3rem] text-c-font-gray pb-4">
          {title}
        </h3>
        <a
          href={route}
          className="relative inline-block text-sm pb-1 text-c-blue mt-auto mx-auto mb-10 border-b-[1px] border-c-blue "
        >
          Apply now
        </a>
      </div>
    </div>
  );
};
export default Card;
