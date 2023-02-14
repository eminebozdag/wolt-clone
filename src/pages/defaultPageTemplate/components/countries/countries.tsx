import Country from "./components/country/country";
import COUNTRIES from "./countries.config";
const Countries = () => {
  return (
    <section className="flex flex-col w-full max-w-[1200px] m-auto py-32 px-8 sm:py-12 bg-c-white">
      <section className="flex justify-between items-center mb-12">
        <h2 className="font-header text-c-font-gray text-[2.8rem] sm:text-[1.5rem] leading-[2.7rem]">
          Explore countries where you find Wolt
        </h2>
      </section>
      <div className="flex relative">
        <div className="flex-[1_1_0%] grid grid-cols-auto gap-x-6 gap-y-4">
          {COUNTRIES.map((data) => (
            <Country {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Countries;
