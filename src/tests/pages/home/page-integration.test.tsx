import {fireEvent, screen, within} from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import Page from "pages/home/page";
import {render} from "tests/test-util";

describe("<Page/>", () => {
	it("should modal not render without trigger", () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<Page />, {preloadedState});

		//Assert
		expect(screen.queryByTestId("login-modal-component")).toBeNull();
	});

	it("should modal render successfully if login button triggered", async () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<Page />, {preloadedState});
		fireEvent.click(screen.getByRole("button", {name: /Log in/i}));

		//Assert
		expect(screen.getByTestId("login-modal-component")).toBeInTheDocument();
	});

	it("should modal render successfully if signup button triggered", async () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<Page />, {preloadedState});
		fireEvent.click(screen.getByRole("button", {name: /Sign up/i}));

		//Assert
		expect(screen.getByTestId("login-modal-component")).toBeInTheDocument();
	});

	it("should login toolbar render successfully if popover button triggered", async () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<Page />, {preloadedState});
		fireEvent.click(screen.getByTestId("popover-button"));

		//Assert
		expect(screen.getByTestId("login-toolbar-component")).toBeInTheDocument();
	});

	it("should modal render successfully if button triggered in login toolbar", async () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<Page />, {preloadedState});
		fireEvent.click(screen.getByTestId("popover-button"));
		fireEvent.click(screen.getByRole("button", {name: /Login or register/i}));

		//Assert
		expect(screen.getByTestId("login-modal-component")).toBeInTheDocument();
	});

	it("should modal close successfully if close button triggered", async () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<Page />, {preloadedState});
		fireEvent.click(screen.getByTestId("popover-button"));
		fireEvent.click(screen.getByRole("button", {name: /Login or register/i}));
		fireEvent.click(screen.getByRole("button", {name: /close/i}));

		//Assert
		expect(screen.queryByTestId("login-modal-component")).not.toBeInTheDocument();
	});

	it("should login successfully if input value valid when submit", async () => {
		//Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};
		const inputValue = "eminebozdag@wolt.com";

		//Act
		render(<Page />, {preloadedState});
		fireEvent.click(screen.getByTestId("popover-button"));
		fireEvent.click(screen.getByRole("button", {name: /Login or register/i}));
		const inputInForm = within(screen.getByTestId("form-component")).getByTestId("search-input") as HTMLInputElement;
		fireEvent.change(inputInForm, {target: {value: inputValue}});
		fireEvent.click(screen.getByRole("button", {name: /next/i}));

		//Assert
		expect(screen.getByTestId("form-component")).not.toBeNull();
		expect(inputInForm.value).toBe("eminebozdag@wolt.com");
		expect(screen.getByTestId("message-span")).toHaveTextContent("Please check your mailbox!");
	});
});
