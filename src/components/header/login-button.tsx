import clsx from "clsx";
import Button from "components/button";
import LoginToolbar from "components/header/login-toolbar";
import UserIcon from "components/icons/user-icon";
import PopoverButton from "components/popover-button";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {dispatchShowLoginModal} from "store/actions/globalActions";

const LoginButton = () => {
	const [popover, setPopover] = useState(false);
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(dispatchShowLoginModal(true));
		setPopover(false);
	};

	return (
		<div className="flex items-center" data-testid="login-component">
			<div className="hidden desktop:flex items-center gap-6">
				<Button variant="secondary" onClick={handleLogin}>
					Log in
				</Button>

				<Button variant="primary" onClick={handleLogin} hover>
					Sign up
				</Button>
			</div>

			<div className="relative flex flex-col desktop:hidden">
				<div className="flex items-center">
					<PopoverButton
						button={
							<UserIcon height={30} width={30} className={clsx("bg-c-white rounded-full", "border-1 border-c-white", "tabletL:h-[34px] tabletL:w-[34px]")} />
						}
						open={popover}
						onClickAway={() => setPopover(false)}
						onClick={() => setPopover(!popover)}>
						{<LoginToolbar onLogin={handleLogin} show={true} />}
					</PopoverButton>
				</div>
			</div>
		</div>
	);
};
export default LoginButton;
