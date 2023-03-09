import {fireEvent, render, screen} from "@testing-library/react";
import VideoSection from "../../../src/pages/home/video-section";

describe("<VideoSection/>", () => {
	it("should render successfully", () => {
		//Arrange

		//Act
		render(<VideoSection />);

		//Assert
		expect(screen.getByTestId("video-section-component")).not.toBeNull();
		expect(screen.getByTestId("shadow-background-component")).not.toBeNull();
		expect(screen.getByTestId("button-component")).not.toBeNull();
		expect(screen.getByTestId("play-icon")).not.toBeNull();
	});

	it("should classname if hover exists", () => {
		//Arrange

		//Act
		render(<VideoSection />);
		fireEvent.mouseOver(screen.getByTestId("button-component"));

		//Assert
		expect(screen.getByTestId("button-hover")).toHaveClass("transition");
	});
});
