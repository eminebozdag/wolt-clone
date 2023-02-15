import DownArrow from "../../../../../../components/icons/downArrow";

interface Props {
  country?: string;
  route?: string;
}

const Country = (data: Props) => {
  const { country, route } = data;
  return (
    <a
      href={route}
      className="relative flex items-center justify-between p-4 border-[1px] border-c-gray rounded-[4px] text-c-font-gray hover:text-c-blue hover:shadow-md transition ease-in duration-150"
    >
      <span className="whitespace-nowrap text-ellipsis overflow-visible">
        <span className="flex justify-start items-center">
          <span className="mr-4 flex">
            <img
              src={`/assets/flags/${country}.svg`}
              alt="country_flag"
              className="w-6 rounded-[4px] shadow-md"
            />
          </span>
          <span className="text-base">{country}</span>
        </span>
      </span>

      <span className="flex items-center">
        <span className="inline-flex">
          <DownArrow
            height={20}
            width={20}
            className="rotate-[270deg] fill-c-font-gray"
          />
        </span>
      </span>
    </a>
  );
};
export default Country;
