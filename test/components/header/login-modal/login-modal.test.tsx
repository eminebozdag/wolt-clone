import {render, screen, within} from "@testing-library/react";
import LoginModal from "../../../../src/components/header/login-modal/login-modal";

describe("<LoginModal/>", () => {
	it("should render successfully", () => {
		// Arrange

		// Act
		render(<LoginModal />);

		// Assert
		const buttonsInLoginModal = within(screen.getByTestId("login-modal-component")).getAllByTestId("button-component");
		expect(buttonsInLoginModal.length).toBe(5);
		expect(screen.getByTestId("form-component")).not.toBeNull();
	});

	it("should render CloseIcon successfully", () => {
		// Arrange

		// Act
		render(<LoginModal />);

		// Assert
		const buttonsInLoginModal = within(screen.getByTestId("login-modal-component")).getAllByTestId("button-component");
		// eslint-disable-next-line testing-library/no-node-access
		expect(buttonsInLoginModal[0].children.length).not.toBe(0);
	});
});
