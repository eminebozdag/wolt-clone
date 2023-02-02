import Button from "../button/button";
import DownArrow from "../icons/downArrow";
import UserIcon from "../icons/userIcon";
import WoltLogo from "../icons/woltLogo";
const Header = () => {
  return (
    <div className="block h-16 bg-white border-b-[1px] border-b-gray-light">
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
            <div className="flex items-center  ">
              <div className="lg:flex items-center gap-5 max-lg:hidden">
                <Button className="h-12 w-12 font-medium text-sm text-font-gray">
                  Log in
                </Button>
                <Button className="inline-flex justify-center items-center font-bold text-white h-[2.875rem] w-[5.5rem] rounded-[0.5rem] bg-blue ">
                  Sign up
                </Button>
              </div>
              <div className="lg:hidden max-lg:flex">
                <button
                  aria-expanded="false"
                  aria-label="User menu"
                  className="inline-flex w-auto h-10 rounded-full bg-gray bg- gap-1 items-center justify-center py-[0.18rem] px-[0.18rem]"
                >
                  <UserIcon
                    height={34}
                    width={34}
                    className="bg-white border-2 border-white rounded-full "
                  />
                  <DownArrow height={24} width={24} fill={"footer-gray"} />
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
