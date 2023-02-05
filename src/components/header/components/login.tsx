import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dispatchShowLoginModal } from "../../../store/actions/globalActions";
import Button from "../../button/button";
import DownArrow from "../../icons/downArrow";
import UserIcon from "../../icons/userIcon";
import LoginToolbar from "./login-toolbar";

const Login = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (e: any) => {
    dispatch(dispatchShowLoginModal(true));
  };

  return (
    <div className="flex items-center">
      <div className="lg:flex items-center gap-5 max-lg:hidden">
        <Button
          onClick={handleLogin}
          className="h-12 w-12 font-medium text-sm text-font-gray"
        >
          Log in
        </Button>
        <Button
          onClick={handleLogin}
          className="inline-flex justify-center items-center font-bold text-white h-[2.875rem] w-[5.5rem] rounded-[0.5rem] bg-blue "
        >
          Sign up
        </Button>
      </div>

      <div className="lg:hidden max-lg:flex flex-col relative">
        <div
          onClick={() => {
            setHover(!hover);
          }}
        >
          <Button
            aria-expanded={false}
            aria-label="User menu"
            className="inline-flex w-auto h-10 rounded-full bg-gray transition duration-150 ease-out hover:ease-in hover:bg-font-gray/10 gap-1 items-center justify-center py-[0.18rem] px-[0.18rem]"
          >
            <UserIcon
              height={34}
              width={34}
              className="bg-white border-2 border-white rounded-full"
            />
            {hover ? (
              <DownArrow
                height={24}
                width={24}
                fill={"footer-gray"}
                className="rotate-180"
              />
            ) : (
              <DownArrow height={24} width={24} fill={"footer-gray"} />
            )}
          </Button>
          <LoginToolbar
            onLogin={handleLogin}
            show={hover}
            onClose={() => setHover(false)}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
