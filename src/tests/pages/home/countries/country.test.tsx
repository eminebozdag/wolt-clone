import {render, screen} from "@testing-library/react";
import Country, {Props} from "../../../../pages/home/countries/country";

describe("<Country/>", () => {
	it("should render successfully", () => {
		// Arrange
		const props: Props = {};

		// Act
		render(<Country {...props} />);

		// Assert
		expect(screen.getByTestId("country-component")).not.toBeNull();
		expect(screen.getByTestId("down-arrow-icon")).not.toBeNull();
	});

	it("should have country image and title if props exist", () => {
		// Arrange
		const props: Props = {country: "Germany"};

		// Act
		render(<Country {...props} />);

		// Assert
		expect(screen.getByAltText(/Germany_flag/i)).not.toBeNull();
		expect(screen.getByTitle("country_name").textContent).toBe("Germany");
	});
});
