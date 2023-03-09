import {render, screen} from "@testing-library/react";
import HomeBanner, {Props} from "../../../../src/pages/home/home-banner/home-banner";

describe("<Country/>", () => {
	it("should render successfully", () => {
		// Arrange
		const props: Props = {};

		// Act
		render(<HomeBanner {...props} />);

		// Assert
		expect(screen.getByTestId("home-banner-component")).not.toBeNull();
		expect(screen.getByTestId("shadow-background-component")).not.toBeNull();
		expect(screen.getByTestId("input-component")).not.toBeNull();
	});

	it("should have daily banner image and color if props exist", () => {
		// Arrange
		const props: Props = {image: "4_Thursday", color: "bg-c-lavender"};

		// Act
		render(<HomeBanner {...props} />);

		// Assert
		expect(screen.getByAltText(/4_Thursday_banner/i)).not.toBeNull();
		expect(screen.getByTestId("home-banner-component")).toHaveClass("bg-c-lavender");
	});
});
