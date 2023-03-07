import {render, screen} from "@testing-library/react";
import Title from "../../../src/pages/home/title";

describe("<Title/>", () => {
	it("should render successfully", () => {
		// Arrange

		// Act
		render(<Title />);

		// Assert
		expect(screen.getByTestId("title-component")).not.toBeNull();
	});
});
