import {screen} from "@testing-library/react";
import {render} from "tests/test-util";
import Page from "../../../pages/home/page";

describe("<Page/>", () => {
	it("should render successfully", () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<Page />, {preloadedState});

		//Assert
		expect(screen.getByTestId("layout-component")).not.toBeNull();
	});
});
