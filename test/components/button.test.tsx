import {fireEvent, render, screen} from "@testing-library/react";
import Button, {Props} from "../../src/components/button";

describe("<Button/>", () => {
	it("should render successfully", () => {
		// Arrange
		const props: Props = {};

		// Act
		render(<Button {...props} />);

		// Assert
		expect(screen.getByTestId("button-component")).not.toBeNull();
	});

	it("should have primary classname when variant is primary", () => {
		// Arrange
		const props: Props = {variant: "primary"};

		// Act
		render(<Button {...props} />);

		// Assert
		expect(screen.getByTestId("button-component")).toHaveClass("bg-c-blue");
	});

	it("should hover when hover is true", () => {
		//Arrange
		const props: Props = {variant: "primary", hover: true};

		//Act
		render(<Button {...props} />);

		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(screen.getByTestId("button-component")).toHaveClass("hover:bg-c-blue/90");
	});

	it("should have children if children props exist", () => {
		//Arrange
		const props: Props = {children: <div></div>};

		//Act
		render(<Button {...props} />);

		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(screen.getByTestId("button-component").children.length).not.toBe(0);
	});

	it("should click event can work properly", () => {
		//Arrange
		const props: Props = {};
		const mockOnClick = jest.fn();

		//Act
		render(<Button onClick={mockOnClick} {...props} />);
		fireEvent.click(screen.getByTestId("button-component"));

		//Assert
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
