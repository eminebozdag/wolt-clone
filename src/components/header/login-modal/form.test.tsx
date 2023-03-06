import {render, screen} from "@testing-library/react";
import Form from "./form";
describe("<Form/>", () => {
	it("should render successfully", () => {
		// Arrange

		// Act
		render(<Form />);

		// Assert
		expect(screen.getByRole("button", {name: /next/i})).not.toBeNull();
		expect(screen.getByTestId("search-input")).not.toBeNull();
	});
});
