import WoltLogo from "../icons/woltLogo";
import Login from "./components/login";

const Header = () => {
  return (
    <div className="block h-16 bg-c-white border-b-[1px] border-b-c-gray-light">
      <header className="relative h-16">
        <div className="absolute w-full h-16 z-[-1]"></div>
        <div className="relative flex items-center h-16 justify-between justify-items-center max-w-[1200px] px-7 mx-auto ">
          <div className="flex justify-start items-center grow shrink basis-0">
            <a
              aria-label="Home"
              title="Wolt"
              className="shrink-0 relative inline-block bg-transparent rounded-lg "
              href="/en/discovery"
            >
              <div className="flex items-center justify-center h-16 w-16">
                <WoltLogo
                  color={"black"}
                  height={68}
                  width={120}
                  viewBox="0 0 63 22"
                />
              </div>
            </a>
          </div>
          <div className="flex item-center justify-center grow shrink basis-0"></div>
          <div className="flex justify-end items-center grow shrink basis-0">
            <Login />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
