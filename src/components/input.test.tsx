import {fireEvent, render, screen} from "@testing-library/react";
import Input, {Props} from "./input";

describe("<Input/>", () => {
	it("should render successfully", () => {
		//Arrange
		const props: Props = {};

		//Act
		render(<Input {...props} />);

		//Assert
		expect(screen.getByTestId("input-component")).not.toBeNull();
	});

	it("should have label if label props exist", () => {
		// Arrange
		const props: Props = {label: "test"};

		// Act
		render(<Input {...props} />);

		// Assert
		expect(screen.getByTestId("search-label")).not.toBeNull();
	});

	it("should have icon if icon props exist", () => {
		// Arrange
		const props: Props = {start: {before: "icon"}};

		// Act
		render(<Input {...props} />);

		// Assert
		expect(screen.getByTestId("search-icon")).not.toBeNull();
	});

	it("should change event can work properly", () => {
		//Arrange
		const expectedSearchText = "search text";

		const props: Props = {};

		//Act
		render(<Input {...props} />);
		const input = screen.getByTestId("search-input") as HTMLInputElement;
		fireEvent.change(input, {target: {value: expectedSearchText}});

		//Assert
		expect(input).not.toBeNull();
		expect(input.value).toBe("search text");
	});

	it("should have classname if classname props exist", () => {
		// Arrange
		const props: Props = {className: "bg-c-white"};

		// Act
		render(<Input {...props} />);

		// Assert
		expect(screen.getByTestId("search-input")).toHaveClass("pb-[6px] bg-c-white");
	});
});
