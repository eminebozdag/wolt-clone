import WoltLogo from "../icons/woltLogo";
const Header = () => {
  return (
    <div className="block h-[4.375rem] bg-pink border-b-[1px] border-border-color">
      <header className="relative h-[4.375rem] bg-yellow">
        <div className="absolute w-full h-[4.375rem] bg-white z-[-1]"></div>
        <div className="relative flex items-center min-w-0 h-[4.375rem] bg-blue justify-between justify-items-center max-w-[1200px] px-16 mx-auto ">
          <div className="flex justify-start items-center min-w-[0px] grow shrink basis-0">
            <a
              aria-label="Home"
              title="Wolt"
              className="shrink-0 relative inline-block bg-transparent rounded-lg "
              href="/en/discovery"
            >
              <div>
                <WoltLogo height={23} width={63} />
              </div>
            </a>
          </div>
          <div className="flex item-center justify-center grow shrink basis-0">
            e
          </div>
          <div className="flex justify-end item-center  min-w-[0px] grow shrink basis-0">
            <div className="flex item-center "></div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
