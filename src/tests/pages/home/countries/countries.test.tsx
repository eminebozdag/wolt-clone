import {render, screen, within} from "@testing-library/react";
import Countries from "../../../../pages/home/countries/countries";

describe("<Countries/>", () => {
	it("should render successfully", () => {
		// Arrange

		// Act
		render(<Countries />);

		// Assert
		expect(screen.getByTestId("countries-component")).not.toBeNull();
		expect(screen.getByTestId("container-component")).not.toBeNull();
		expect(screen.getByTitle("countries_title").textContent).toBe("Explore countries where you find Wolt");
		const countryInCountries = within(screen.getByTestId("container-component")).getAllByTestId("country-component");
		expect(countryInCountries.length).toBe(23);
	});
});
