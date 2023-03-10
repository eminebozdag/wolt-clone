import {fireEvent, render, screen} from "@testing-library/react";
import PopoverButton, {Props} from "../../components/popover-button";

describe("<PopoverButton/>", () => {
	it("should render successfully", () => {
		//Arrange
		const props: Props = {};

		//Act
		render(<PopoverButton {...props} />);

		//Assert
		expect(screen.getByTestId("popover-component")).not.toBeNull();
	});

	it("should have classname if classname props exist", () => {
		//Arrange
		const props: Props = {className: "flex-col"};

		//Act
		render(<PopoverButton {...props} />);

		//Assert
		expect(screen.getByTestId("popover-component")).toHaveClass("flex-col");
	});

	it("should popover button render successfully when open is true and click event passed as a props", () => {
		//Arrange
		const props: Props = {open: true, button: <button></button>};
		const mockOnClick = jest.fn();

		//Act
		render(<PopoverButton onClick={mockOnClick} {...props} />);
		const popoverButton = screen.getByTestId("popover-button");
		fireEvent.click(popoverButton);

		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(popoverButton.children[0]).not.toBeNull();
		// eslint-disable-next-line testing-library/no-node-access
		expect(popoverButton.children[1].firstChild).toHaveClass("rotate-180");
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	it("children should render successfully when open is true and children, classname passed as a props", () => {
		//Arrange
		const props: Props = {open: true, children: <div></div>, popoverClassName: "bg-c-white"};

		//Act
		render(<PopoverButton {...props} />);

		//Assert
		const popoverChildren = screen.getByTestId("popover-children");
		expect(popoverChildren).not.toBeNull();
		// eslint-disable-next-line testing-library/no-node-access
		expect(popoverChildren.children.length).not.toBe(0);
		expect(popoverChildren).toHaveClass("bg-c-white");
	});

	it("should click event can work properly", () => {
		//Arrange
		const props: Props = {};
		const mockOnClick = jest.fn();

		//Act
		render(<PopoverButton onClick={mockOnClick} {...props} />);
		fireEvent.click(screen.getByTestId("popover-button"));

		//Assert
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
