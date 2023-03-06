import {render, screen} from "@testing-library/react";
import Layout, {Props} from "./layout";

jest.mock("./header/header", () => jest.fn().mockReturnValue(<div data-testid="header-component"></div>));
jest.mock("./footer/footer", () => jest.fn().mockReturnValue(<div data-testid="footer-component"></div>));
describe("<Layout/>", () => {
	it("should render successfully", () => {
		// Arrange

		// Act
		render(<Layout />);

		// Assert
		expect(screen.getByTestId("layout-component")).not.toBeNull();
		expect(screen.getByTestId("header-component")).not.toBeNull();
		expect(screen.getByTestId("footer-component")).not.toBeNull();
	});

	it("should have children if children props exist", () => {
		// Arrange
		const props: Props = {children: <div></div>};

		// Act
		render(<Layout {...props} />);

		// Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(screen.getByTestId("layout-children").children.length).toBe(1);
	});
});
