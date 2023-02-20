import React from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../../../button";
import CloseIcon from "../../../icons/close-icon";
import Form from "./components/form/form";
import SocialLogin from "./components/social-login/social-login";
import social_logins from "./components/social-login/social.login.config";
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
      <div className="fixed flex items-center justify-center w-full h-full z-40 top-0 bg-c-font-gray/60">
        <div className="fixed xs:absolute xs:bottom-0 xs:right-0 xs:left-0 bg-c-white shadow-[rgba(0,0,0,0.2)_0px_7px_29px_0px] rounded-2xl z-20">
          <div className="w-[100vw] max-w-lg">
            <div className="relative w-full h-20 xs:w-[100vw]">
              <div className="absolute right-4 top-4">
                <Button
                  variant="secondary"
                  onClick={onClose}
                  className="justify-center rounded-full bg-c-gray-light transition duration-120 ease-out hover:ease-in hover:bg-c-gray"
                >
                  <CloseIcon height={20} width={20} fill={"footer-c-gray"} />
                </Button>
              </div>
            </div>
            <div className="px-4 xs:w-[100vw]">
              <div className="flex flex-col justify-between">
                <div className="mb-6">
                  <h2 className="text-[2rem] font-header font-[800] mb-3 xs:text-[1.5rem]">
                    Create an account or log in
                  </h2>
                  <div className="text-base text-c-font-gray">
                    Log in below or create a new Wolt account.
                  </div>
                </div>
                <div className="flex flex-col text-base sm:text-sm">
                  {social_logins.map((social) => {
                    return (
                      <SocialLogin
                        Component={<social.Component width={16} />}
                        type={"outline"}
                        text={social.text}
                        style={social.style}
                      />
                    );
                  })}

                  <div className="flex mt-4 items-center">
                    <hr className="flex grow shrink basis-auto border-c-gray"></hr>
                    <span className="mx-4 text-sm text-c-font-gray">
                      or log in with email
                    </span>
                    <hr className="flex grow shrink basis-auto border-c-gray"></hr>
                  </div>
                  <Form />
                  <span className="text-c-gray-medium text-xs leading-4 py-4">
                    {"Please visit  "}
                    <a
                      font-family="default"
                      href="https://explore.wolt.com/en/deu/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-c-blue font-medium"
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
                      className="text-c-blue font-medium"
                    >
                      Privacy Policy
                    </a>
                    {" and "}
                    <a
                      font-family="default"
                      href="https://hcaptcha.com/terms"
                      target="_blank"
                      rel="noreferrer"
                      className="text-c-blue font-medium"
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
