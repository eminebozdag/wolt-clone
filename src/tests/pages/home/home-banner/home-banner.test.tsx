import {fireEvent, render, screen} from "@testing-library/react";
import HomeBanner, {Props} from "pages/home/home-banner/home-banner";

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

	it("should input change event can work properly", () => {
		//Arrange
		const expectedSearchText = "search text";
		const props: Props = {};

		//Act
		render(<HomeBanner {...props} />);
		const input = screen.getByTestId("search-input") as HTMLInputElement;
		fireEvent.change(input, {target: {value: expectedSearchText}});

		//Assert
		expect(input).not.toBeNull();
		expect(input.value).toBe("search text");
	});
});
