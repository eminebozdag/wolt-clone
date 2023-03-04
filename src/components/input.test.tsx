import {fireEvent, render, screen} from "@testing-library/react";
import Input, {Props} from "./input";

describe("<Input/>", () => {
	it("should be rendered successfully", () => {
		//Arrange
		const props: Props = {};

		//Act
		const {getByTestId} = render(<Input {...props} />);

		//Assert
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(getByTestId("input-component")).not.toBeNull();
	});

	it("should have label if label props exist", () => {
		// Arrange
		const props: Props = {label: "test"};

		// Act
		const {getByTestId} = render(<Input {...props} />);

		// Assert
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(getByTestId("search-label")).not.toBeNull();

		//console.log(container.firstElementChild?.children[1].children[0]); search-input
	});

	it("should have icon if icon exist", () => {
		// Arrange
		const props: Props = {start: {before: "icon"}};

		// Act
		const {getByTestId} = render(<Input {...props} />);

		// Assert
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(getByTestId("search-icon")).not.toBeNull();
	});

	it("should change event can work properly", () => {
		//Arrange
		const expectedSearchText = "search text";

		const props: Props = {};

		//Act
		render(<Input {...props} />);
		const input = screen.getByTestId("search-input") as HTMLInputElement;

		// eslint-disable-next-line testing-library/prefer-screen-queries
		fireEvent.change(input, {target: {value: expectedSearchText}});

		//Assert
		expect(input).not.toBeNull();
		expect(input.value).toBe("search text");
	});

	it("should have classname if classname prop exist", () => {
		// Arrange
		const props: Props = {className: "bg-c-white"};

		// Act
		render(<Input {...props} />);
		const input = screen.getByTestId("search-input");
		// Assert
		// eslint-disable-next-line testing-library/no-node-access

		expect(input).toHaveClass("pb-[6px] bg-c-white");
	});
});
