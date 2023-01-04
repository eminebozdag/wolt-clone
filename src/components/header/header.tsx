import WoltLogo from "../icons/woltLogo";
const Header = () => {
  return (
    <div className="block h-[4.3rem] bg-white border-b-[1px] border-b-gray-light">
      <header className="relative h-[4.3rem]">
        <div className="absolute w-full h-[4.3rem] z-[-1]"></div>
        <div className="relative flex items-center h-[4.3rem] justify-between justify-items-center max-w-[1200px] px-7 mx-auto ">
          <div className="flex justify-start items-center grow shrink basis-0">
            <a
              aria-label="Home"
              title="Wolt"
              className="shrink-0 relative inline-block bg-transparent rounded-lg "
              href="/en/discovery"
            >
              <div className="flex items-center h-[4.3rem] w-[4rem]">
                <WoltLogo height={23} width={63} />
              </div>
            </a>
          </div>
          <div className="flex item-center justify-center grow shrink basis-0"></div>
          <div className="flex justify-end items-center grow shrink basis-0">
            <div className="flex items-center">
              <div className="flex items-center gap-5">
                <button className="h-[2.875rem] w-[2.875rem] font-medium text-sm text-font-gray">
                  Log in
                </button>
                <button className="inline-flex justify-center items-center font-bold text-white h-[2.875rem] w-[5.5rem] rounded-[0.5rem] bg-blue ">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
