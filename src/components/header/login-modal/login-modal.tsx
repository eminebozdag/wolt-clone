import clsx from "clsx";
import Button from "components/button";
import Form from "components/header/login-modal/form";
import CloseIcon from "components/icons/close-icon";
import React from "react";
import ClickAwayListener from "react-click-away-listener";
import SOCIAL_LOGIN from "./social.login.config";
interface Props {
	onClickAway?(): void;
}

const LoginModal = (props: Props) => {
	const {onClickAway} = props;

	return (
		<ClickAwayListener onClickAway={() => onClickAway && onClickAway()}>
			<div
				className={clsx(
					"w-[100vw] mobile:w-[30rem]",
					"absolute bottom-0 right-0 left-0",
					"mobile:fixed mobile:right-auto mobile:left-auto mobile:bottom-auto",
				)}
				data-testid="login-modal-component">
				<div className="bg-c-white shadow-c-md rounded-2xl z-20">
					<div className="relative pt-[63px] tabletL:pt-[72px]">
						<div className="absolute right-4 top-4">
							<Button variant="FAB" onClick={onClickAway} className="p-[10px]" hover aria-label="close">
								<CloseIcon height={17} width={17} fill={"footer-c-gray"} className="tabletL:h-[20px] tabletL:w-[20px]" />
							</Button>
						</div>

						<div className="w-full p-[14px] tabletL:p-4">
							<div className="flex flex-col justify-between">
								<div className="mb-[21px] tabletL:mb-6">
									<h2 className={clsx("font-header font-[600]", "text-lg tabletL:text-clg", "mb-[7px] tabletL:mb-8")}>Create an account or log in</h2>
									<div className={clsx("text-c-font-gray", "mt-4 ", "text-xs tabletL:text-sm")}>Log in below or create a new Wolt account.</div>
								</div>
								<div className="flex flex-col text-xs tabletL:text-sm">
									{SOCIAL_LOGIN.map((data, index) => {
										return (
											<div key={index} className="relative mt-2">
												<Button variant={"outline"} className={data.style}>
													<div className="flex flex-row items-center">
														<div className="flex">{<data.Component height={16} width={16} className="tabletL:h-4 tabletL:w-4" />}</div>
														<div className="absolute w-[90%]">{data.text}</div>
													</div>
												</Button>
											</div>
										);
									})}

									<div className="flex items-center mt-4 tabletL:mt-6 tabletL:mb-2">
										<hr className="flex grow shrink basis-auto border-c-gray"></hr>
										<span className="text-c-font-gray mx-4 text-xxs tabletL:text-xs">or log in with email</span>
										<hr className="flex grow shrink basis-auto border-c-gray"></hr>
									</div>
									<Form />
									<span className={clsx("text-c-gray-medium font-light pt-[7px] my-[7px]", "text-cxs tabletL:text-xxs")}>
										{"Please visit  "}
										<a href="https://explore.wolt.com/en/deu/privacy" target="_blank" rel="noopener noreferrer" className="text-c-blue font-medium">
											Wolt Privacy Statement
										</a>
										{
											"  to learn more about personal data processing at Wolt. You can access the local Privacy Statement related to your Wolt account after you have provided the country and language preferences applicable to you during registration. This site is protected by hCaptcha. The hCaptcha "
										}
										<a href="https://hcaptcha.com/privacy" target="_blank" rel="noreferrer" className="text-c-blue font-medium">
											Privacy Policy
										</a>
										{" and "}
										<a href="https://hcaptcha.com/terms" target="_blank" rel="noreferrer" className="text-c-blue font-medium">
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
		</ClickAwayListener>
	);
};

export default LoginModal;
