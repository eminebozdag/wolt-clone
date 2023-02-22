import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dispatchShowLoginModal } from "../../../store/actions/globalActions";
import Button from "../../button";
import UserIcon from "../../icons/user-icon";
import PopoverButton from "../../popover-button";
import LoginToolbar from "./login-toolbar";

const Login = () => {
  const [popover, setPopover] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(dispatchShowLoginModal(true));
    setPopover(false);
  };

  return (
    <div className="flex items-center">
      <div className="lg:flex items-center gap-5 max-lg:hidden">
        <Button variant="secondary" onClick={handleLogin}>
          Log in
        </Button>

        <Button variant="primary" onClick={handleLogin} hover>
          Sign up
        </Button>
      </div>

      <div className="lg:hidden max-lg:flex flex-col relative">
        <div className="flex items-center">
          <PopoverButton
            button={
              <UserIcon
                height={34}
                width={34}
                className="bg-c-white border-2 border-c-white rounded-full"
              />
            }
            open={popover}
            onClickAway={() => setPopover(false)}
            onClick={() => setPopover(!popover)}
          >
            {<LoginToolbar onLogin={handleLogin} show={true} />}
          </PopoverButton>
        </div>
      </div>
    </div>
  );
};
export default Login;
