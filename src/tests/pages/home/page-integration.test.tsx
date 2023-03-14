import {fireEvent, screen} from "@testing-library/react";
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
});
