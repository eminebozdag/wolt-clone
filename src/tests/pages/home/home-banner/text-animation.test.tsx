import {render, screen} from "@testing-library/react";
import TextAnimation from "../../../../pages/home/home-banner/animation/text-animation";

describe("<TextAnimation/>", () => {
	it("should render successfully", () => {
		//Arrange

		//Act
		render(<TextAnimation />);

		//Assert
		expect(screen.getByTestId("text-animation-component")).not.toBeNull();
	});
});
