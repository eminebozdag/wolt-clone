import { CSSTransition } from "react-transition-group";
import Button from "../../button";
import TriangleIcon from "../../icons/triangle-icon";

interface Props {
  onLogin?(e: any): void;
  show: boolean;
  onClose?(e: any): void;
}

const LoginToolbar = ({ onLogin, show, onClose }: Props) => {
  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={300}
      classNames="modal-fade"
    >
      <div className="opacity-100 bg-c-white rounded-lg z-50" onClick={onClose}>
        <div className="absolute w-4 h-2 top-[-7.7px] right-5 z-10">
          <TriangleIcon className="fill-c-white" />
        </div>

        <div className="relative bg-c-white z-0 rounded-lg min-h-[1.75rem] drop-shadow-2xl">
          <div className="relative min-w-[12rem] rounded-lg border-[0.2px] border-c-gray overflow-hidden">
            <div className="w-auto h-auto">
              <div className="p-2">
                <Button
                  className="text-primary-text font-normal text-sm cursor-pointer text-start px-4 py-2 w-full hover:bg-c-gray-light/50 active:bg-c-gray-light rounded-lg"
                  onClick={onLogin}
                >
                  Login or register
                </Button>
              </div>
              <hr className="border-c-font-gray/10"></hr>
              <div className="p-2">
                <Button className="text-primary-text font-normal text-sm cursor-pointer text-start px-4 py-2 w-full hover:bg-c-gray-light/50 active:bg-c-gray-light rounded-lg">
                  Language: English
                </Button>
                <Button className="text-primary-text font-normal text-sm cursor-pointer text-start px-4 py-2 w-full hover:bg-c-gray-light/50 active:bg-c-gray-light rounded-lg">
                  Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default LoginToolbar;
