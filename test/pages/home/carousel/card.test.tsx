import {render, screen} from "@testing-library/react";
import Card, {Props} from "../../../../src/pages/home/carousel/card";

describe("<Card/>", () => {
	it("should render successfully", () => {
		// Arrange
		const props: Props = {};

		// Act
		render(<Card {...props} />);

		// Assert
		expect(screen.getByTestId("card-component")).not.toBeNull();
	});

	it("should image render successfully", () => {
		// Arrange
		const props: Props = {image: "jobs-card-image", title: "Enter a new chapter and find a job at Wolt"};

		// Act
		render(<Card {...props} />);

		// Assert
		expect(screen.getByAltText(/jobs-card-image/i)).not.toBeNull();
	});
});
