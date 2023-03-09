import {render, screen} from "@testing-library/react";
import Navigation from "../../../components/footer/navigation";

describe("<Navigation/>", () => {
	it("should render successfully", () => {
		//Arrange

		//Act
		render(<Navigation />);

		//Assert
		expect(screen.getByTestId("navigation-component")).not.toBeNull();
		expect(screen.getByTestId("data-tags")).not.toBeNull();
	});
});
