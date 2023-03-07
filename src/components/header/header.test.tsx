import {render, screen} from "@testing-library/react";
import Header from "./header";

jest.mock("../container", () => jest.fn().mockReturnValue(<div data-testid="container-component"></div>));

describe("<Header/>", () => {
	it("should render successfully", () => {
		// Arrange

		// Act
		render(<Header />);

		// Assert
		expect(screen.getByTestId("container-component")).not.toBeNull();
	});
});
