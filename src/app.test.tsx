import {screen} from "@testing-library/react";
import App from "App";
import {render} from "tests/test-util";

describe("<LoginButton/>", () => {
	it("should render successfully", () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<App />, {preloadedState});

		//Assert
		expect(screen.getByTestId("app-component")).not.toBeNull();
	});
});
