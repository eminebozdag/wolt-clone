import {fireEvent, render} from "@testing-library/react";
import Button, {Props} from "./button";

describe("<Button/>", () => {
	it("should be rendered successfully", () => {
		// Arrange
		const props: Props = {};

		// Act
		const {getByTestId} = render(<Button {...props} />);

		// Assert
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(getByTestId("button-component")).not.toBeNull();
	});

	it("should have primary classname when variant is primary", () => {
		// Arrange
		const props: Props = {variant: "primary"};

		// Act
		const {container} = render(<Button {...props} />);

		// Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstElementChild).toHaveClass(
			"justify-center text-sm text-c-white font-semibold bg-c-blue px-[1rem] min-h-[2.875rem] rounded-lg",
		);
	});

	it("should hover when hover is true", () => {
		//Arrange
		const props: Props = {variant: "primary", hover: true};

		//Act
		const {container} = render(<Button {...props} />);

		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstElementChild).toHaveClass("hover:bg-c-blue/90");
	});

	it("should have children if children exist", () => {
		//Arrange
		const props: Props = {children: <div></div>};

		//Act
		const {container} = render(<Button {...props} />);
		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstElementChild?.children.length).not.toBe(0);
	});

	it("should click event can work properly", () => {
		//Arrange
		const props: Props = {};
		const mockOnClick = jest.fn();

		//Act
		const {getByTestId} = render(<Button onClick={mockOnClick} {...props} />);
		// eslint-disable-next-line testing-library/prefer-screen-queries
		fireEvent.click(getByTestId("button-component"));

		//Assert
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
