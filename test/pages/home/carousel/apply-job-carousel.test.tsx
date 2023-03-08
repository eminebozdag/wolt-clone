import {render, screen, within} from "@testing-library/react";
import ApplyJobCarousel from "../../../../src/pages/home/carousel/apply-job-carousel";

describe("<ApplyJobCarousel/>", () => {
	it("should render successfully", () => {
		// Arrange

		// Act
		render(<ApplyJobCarousel />);

		// Assert
		expect(screen.getByTestId("container-component")).not.toBeNull();
		const cardsInContainer = within(screen.getByTestId("container-component")).getAllByTestId("card-component");
		expect(cardsInContainer.length).toBe(3);
	});
});
