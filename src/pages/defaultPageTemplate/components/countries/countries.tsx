import Country from "./components/country/country";
import COUNTRIES from "./countries.config";
const Countries = () => {
  return (
    <section className="flex flex-col w-full max-w-[1200px] m-auto py-32 px-8 md:py-20 sm:py-12 bg-c-white">
      <section className="flex justify-between items-center mb-14 md:mb-8 csm:mb-4 xs:mb-2">
        <h2 className="font-text text-c-font-gray text-[2.9rem] md:text-[2.5rem] csm:text-[2.2rem] xs:text-[1.5rem] xs:font-header xs:font-[600] leading-[2.7rem]">
          Explore countries where you find Wolt
        </h2>
      </section>
      <div className="flex relative">
        <div className="flex-[1_1_0%] grid grid-cols-auto xs:grid-cols-1 gap-x-6 gap-y-4">
          {COUNTRIES.map((data) => (
            <Country {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Countries;
