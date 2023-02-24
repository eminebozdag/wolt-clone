import Container from "../container";
import WoltLogo from "../icons/wolt-logo";
import Login from "./components/login";

const Header = () => {
  return (
    <div className="block h-[68px] bg-c-white border-b-[1px] border-b-c-gray-light">
      <header className="h-full">
        <Container className="flex items-center justify-between justify-items-center mx-auto ">
          <div className="flex flex-1 justify-start items-center">
            <a
              className="shrink-0 relative inline-block bg-transparent rounded-lg"
              href="/en/discovery"
            >
              <div className="flex items-center">
                <WoltLogo color="black" height={68} width={68} />
              </div>
            </a>
          </div>

          <div className="flex flex-1 justify-end items-center">
            <Login />
          </div>
        </Container>
      </header>
    </div>
  );
};
export default Header;
