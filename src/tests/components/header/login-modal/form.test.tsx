import {fireEvent, render, screen} from "@testing-library/react";
import Form from "components/header/login-modal/form";
describe("<Form/>", () => {
	it("should render successfully", () => {
		// Arrange

		// Act
		render(<Form />);

		// Assert
		expect(screen.getByRole("button", {name: /next/i})).not.toBeNull();
		expect(screen.getByTestId("search-input")).not.toBeNull();
	});
	it("should error if change event can not work properly", () => {
		//Arrange
		const expectedSearchText = "search text";

		//Act
		render(<Form />);
		const input = screen.getByTestId("search-input") as HTMLInputElement;
		fireEvent.change(input, {target: {value: expectedSearchText}});

		//Assert
		expect(input).not.toBeNull();
		expect(input.value).toBe("search text");
		expect(screen.getByTestId("error-span")).not.toBeNull();
	});

	it("should error does not exist if change event has correct email format", () => {
		//Arrange
		const expectedSearchText = "eminebozdag@wolt.com";

		//Act
		render(<Form />);
		const input = screen.getByTestId("search-input") as HTMLInputElement;
		fireEvent.change(input, {target: {value: expectedSearchText}});

		//Assert
		expect(input).not.toBeNull();
		expect(input.value).toBe("eminebozdag@wolt.com");
		expect(screen.queryByTestId("error-span")).toBeNull();
	});

	it("should click event can work properly if form submit", () => {
		//Arrange
		const mockOnSubmit = jest.fn();

		//Act
		render(<Form onSubmit={mockOnSubmit} />);
		fireEvent.submit(screen.getByTestId("form-component"));

		//Assert
		expect(mockOnSubmit).toHaveBeenCalledTimes(1);
	});
});
