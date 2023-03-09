import {fireEvent, render, screen, within} from "@testing-library/react";
import React from "react";
import LoginToolbar, {Props} from "../../../components/header/login-toolbar";

describe("<LoginToolbar/>", () => {
	it("should render successfully", () => {
		//Arrange
		const props: Props = {show: true};

		//Act
		render(<LoginToolbar {...props} />);

		//Assert
		expect(screen.getByTestId("login-toolbar-component")).not.toBeNull();
		expect(screen.getByTestId("triangle-icon")).not.toBeNull();
		const buttonsInLoginToolbar = within(screen.getByTestId("login-toolbar-component")).getAllByTestId("button-component");
		expect(buttonsInLoginToolbar.length).toBe(3);
	});

	it("should click event can work properly", () => {
		//Arrange
		const props: Props = {show: true};
		const mockOnClick = jest.fn();

		//Act
		render(<LoginToolbar onClose={mockOnClick} {...props} />);
		fireEvent.click(screen.getByTestId("login-toolbar-component"));

		//Assert
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
