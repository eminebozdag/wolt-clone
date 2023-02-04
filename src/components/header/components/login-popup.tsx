import Button from "../../button/button";

interface Props {
  onLogin?(e: any): void;
}

const LoginPopUp = ({ onLogin }: Props) => {
  return (
    <div
      role="dialog"
      className="absolute top-[3.1rem] left-[-125px] opacity-100  bg-white rounded-lg"
    >
      <div
        aria-hidden="true"
        className="absolute w-4 h-2 top-[-7.7px] right-5 z-10"
      >
        <svg viewBox="0 0 32 16" className="fill-white">
          <path
            d="M 16,0 L32,16 H0 Z"
            className="drop-shadow-2xl fill-font-gray/10"
          ></path>
          <path d="M 16,1 L31,16 H1 Z"></path>
        </svg>
      </div>

      <div className="relative bg-white z-0 rounded-lg min-h-[1.75rem] drop-shadow-2xl">
        <div className="relative min-w-[12rem] rounded-lg border-[0.2px] border-font-gray/10 overflow-hidden">
          <div className="w-auto h-auto">
            <div className="p-2">
              <Button
                className="text-primary-text font-normal text-sm cursor-pointer text-start px-4 py-2 w-full hover:bg-gray-light rounded-lg"
                onClick={onLogin}
              >
                Login or register
              </Button>
            </div>
            <hr className="border-font-gray/10"></hr>
            <div className="p-2">
              <Button className="text-primary-text font-normal text-sm cursor-pointer text-start px-4 py-2 w-full hover:bg-gray-light rounded-lg">
                Language: English
              </Button>
              <Button className="text-primary-text font-normal text-sm cursor-pointer text-start px-4 py-2 w-full hover:bg-gray-light rounded-lg">
                Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopUp;
