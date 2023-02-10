import React from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../../../button/button";
import CloseIcon from "../../../icons/closeIcon";
import Form from "./components/form/form";
import SocialLogin from "./components/social-login/social-login";
import social_logins from "./components/social-login/social.login.config";
interface Props {
  onClose?(e: any): void;
  show: boolean;
}

const LoginModal = ({ onClose, show }: Props) => {
  const loginModal = document.getElementById("login_modal");

  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={300}
      classNames="modal-fade"
    >
      <div className="fixed flex items-center justify-center w-full h-full z-40 top-0 bg-font-gray/30">
        <div
          id="login_modal"
          className="fixed xs:absolute xs:bottom-0 xs:right-0 xs:left-0 bg-white shadow-[rgba(0,0,0,0.2)_0px_7px_29px_0px] rounded-2xl z-20"
        >
          <div className="w-[100vw] max-w-md">
            <div className="relative w-full h-20 xs:w-[100vw]">
              <div className="absolute right-4 top-4">
                <Button
                  onClick={onClose}
                  className="inline-flex items-center justify-center p-3 rounded-full bg-gray transition duration-120 ease-out hover:ease-in hover:bg-font-gray/10"
                >
                  <CloseIcon height={20} width={20} fill={"footer-gray"} />
                </Button>
              </div>
            </div>
            <div className="px-4 xs:w-[100vw]">
              <div className="flex flex-col justify-between">
                <div className="mb-6">
                  <h2 className="text-[1.7rem] font-[1000] font-header mb-4 xs:text-[1.5rem]">
                    Create an account or log in
                  </h2>
                  <div className="text-sm text-font-gray">
                    Log in below or create a new Wolt account.
                  </div>
                </div>
                <div className="flex flex-col text-base sm:text-sm">
                  {social_logins.map((social) => {
                    return (
                      <SocialLogin
                        Component={<social.Component width={14} />}
                        text={social.text}
                        style={social.style}
                      />
                    );
                  })}
                  <div className="flex mt-4 items-center">
                    <hr className="flex grow shrink basis-auto border-[1px] border-gray"></hr>
                    <span className="mx-4 text-sm text-font-gray/90">
                      or log in with email
                    </span>
                    <hr className="flex grow shrink basis-auto border-[1px] border-gray"></hr>
                  </div>
                  <Form />
                  <span className="text-font-gray/70 text-xxs leading-4 py-4">
                    {"Please visit  "}
                    <a
                      font-family="default"
                      href="https://explore.wolt.com/en/deu/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue font-medium"
                    >
                      Wolt Privacy Statement
                    </a>
                    {
                      "  to learn more about personal data processing at Wolt. You can access the local Privacy Statement related to your Wolt account after you have provided the country and language preferences applicable to you during registration. This site is protected by hCaptcha. The hCaptcha "
                    }
                    <a
                      font-family="default"
                      href="https://hcaptcha.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue font-medium"
                    >
                      Privacy Policy
                    </a>
                    {" and "}
                    <a
                      font-family="default"
                      href="https://hcaptcha.com/terms"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue font-medium"
                    >
                      Terms of Service
                    </a>
                    {"  apply."}
                  </span>
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
