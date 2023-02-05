import React from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../../button/button";
import CloseIcon from "../../icons/closeIcon";
import AppleIcon from "../../icons/socials/appleIcon";
import FacebookIcon from "../../icons/socials/facebookIcon";
import GoogleIcon from "../../icons/socials/googleIcon";
interface Props {
  onClose?(e: any): void;
  show: boolean;
}

const LoginModal = ({ onClose, show }: Props) => {
  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={300}
      classNames="modal-fade"
    >
      <div
        className="fixed flex items-center justify-center w-full h-full z-40 top-0 bg-font-gray/30"
        onClick={onClose}
      >
        <div
          className="fixed  xs:w-full xs:bottom-0 bg-white shadow-[rgba(0,0,0,0.2)_0px_7px_29px_0px] rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-[36rem] w-full">
            <div className="relative w-full h-16">
              <div className="absolute right-4 top-4">
                <Button
                  onClick={onClose}
                  className="inline-flex items-center justify-center p-2 rounded-full bg-gray transition duration-120 ease-out hover:ease-in hover:bg-font-gray/10"
                >
                  <CloseIcon height={18} width={18} fill={"footer-gray"} />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col justify-between ">
                <div className="mb-6">
                  <h2 className="text-[1.6rem] font-extrabold font-header mb-4">
                    Create an account or log in
                  </h2>
                  <div className="text-sm text-font-gray">
                    Log in below or create a new Wolt account.
                  </div>
                </div>
                <div className="flex flex-col">
                  <Button className="relative mt-2">
                    <div className="flex items-center p-4 border-2 bg-white border-gray rounded-lg transition duration-120 ease-out hover:ease-in hover:bg-font-gray/10 hover:border-font-gray/10">
                      <div className="flex flex-row items-center ">
                        <div className="flex">
                          <GoogleIcon width={14} />
                        </div>
                        <div className="absolute text-sm font-semibold w-[90%]">
                          Continue with Google
                        </div>
                      </div>
                    </div>
                  </Button>

                  <Button className="relative mt-2">
                    <div className="flex items-center p-4 border-2 bg-black border-black rounded-lg transition duration-120 ease-out hover:ease-in hover:bg-black/90 hover:border-black/90">
                      <div className="flex flex-row items-center">
                        <div className="flex">
                          <AppleIcon width={14} />
                        </div>
                        <div className="absolute text-sm text-white font-medium w-[90%] ">
                          Continue with Apple
                        </div>
                      </div>
                    </div>
                  </Button>

                  <Button className="relative mt-2">
                    <div className="flex items-center p-4 border-2 bg-fblue border-fblue rounded-lg transition duration-120 ease-out hover:ease-in hover:bg-fblue/90 hover:border-fblue/90">
                      <div className="flex flex-row items-center">
                        <div className="flex">
                          <FacebookIcon width={14} />
                        </div>
                        <div className="absolute text-sm text-white font-medium w-[90%] ">
                          Continue with Facebook
                        </div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default LoginModal;
