import {screen} from "@testing-library/react";
import {render} from "tests/test-util";
import App from "./App";

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
