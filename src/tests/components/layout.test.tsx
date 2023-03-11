import {screen} from "@testing-library/react";
import Layout, {Props} from "components/layout";
import {render} from "tests/test-util";

describe("<Layout/>", () => {
	it("should render successfully", () => {
		// Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};

		//Act
		render(<Layout />, {preloadedState});

		// Assert
		expect(screen.getByTestId("layout-component")).not.toBeNull();
		expect(screen.getByTestId("header-component")).not.toBeNull();
		expect(screen.getByTestId("footer-component")).not.toBeNull();
	});

	it("should have children if children props exist", () => {
		// Arrange
		const preloadedState = {globalReducer: {showLoginModal: false}};
		const props: Props = {children: <div></div>};

		// Act
		render(<Layout {...props} />, {preloadedState});

		// Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(screen.getByTestId("layout-children").children.length).toBe(1);
	});
});
