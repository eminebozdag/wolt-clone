import clsx from "clsx";
import Container from "components/container";
import LoginButton from "components/header/login-button";
import WoltLogo from "components/icons/wolt-logo";

const Header = () => {
	return (
		<header className="block bg-c-white border-b-1 border-b-c-gray" data-testid="header-component">
			<Container className={clsx("items-center justify-between", "mx-auto px-4", "h-[54px] mobile:h-[60px] tabletL:h-[68px]")}>
				<div className="flex flex-1 justify-start items-center">
					<a href="/en/discovery">
						<div className="flex items-center">
							<WoltLogo color="black" className={"h-[20px] mobile:h-[24px] tabletL:h-[27px]"} />
						</div>
					</a>
				</div>
				<div className="flex flex-1 justify-end items-center">
					<LoginButton />
				</div>
			</Container>
		</header>
	);
};
export default Header;
