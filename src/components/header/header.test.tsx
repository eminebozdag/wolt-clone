import {render, screen} from "@testing-library/react";
import Header from "./header";

jest.mock("../container", () => jest.fn().mockReturnValue(<div data-testid="container-component"></div>));
jest.mock("../icons/wolt-logo", () => jest.fn().mockReturnValue(<div data-testid="wolt-logo-component"></div>));
jest.mock("./login", () => jest.fn().mockReturnValue(<div data-testid="login-component"></div>));

describe("<Header/>", () => {
	it("should render successfully", () => {
		// Arrange

		// Act
		render(<Header />);

		// Assert
		expect(screen.getByTestId("container-component")).not.toBeNull();
	});
});
