import {screen} from "@testing-library/react";
import {render} from "tests/test-util";
import LoginButton from "../../../components/header/login-button";

describe("<LoginButton/>", () => {
	it("should render successfully", () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<LoginButton />, {preloadedState});

		//Assert
		expect(screen.getByTestId("login-component")).not.toBeNull();
		expect(screen.getByTestId("popover-component")).not.toBeNull();
	});
});
