import {screen} from "@testing-library/react";
import {render} from "tests/test-util";
import Header from "../../../components/header/header";

describe("<Header/>", () => {
	it("should render successfully", () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<Header />, {preloadedState});

		// Assert
		expect(screen.getByTestId("container-component")).not.toBeNull();
		expect(screen.getByTestId("wolt-logo")).not.toBeNull();
		expect(screen.getByTestId("login-component")).not.toBeNull();
	});
});
