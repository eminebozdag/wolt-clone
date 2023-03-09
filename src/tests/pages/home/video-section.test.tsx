import {fireEvent, render, screen} from "@testing-library/react";
import VideoSection from "../../../pages/home/video-section";

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

	it("should have classname if hover exists", () => {
		//Arrange

		//Act
		render(<VideoSection />);
		fireEvent.mouseOver(screen.getByTestId("button-component"));

		//Assert
		expect(screen.getByTestId("button-hover")).toHaveClass("transition");
	});
	it("should have not classname if hover does not exist", () => {
		//Arrange

		//Act
		render(<VideoSection />);
		fireEvent.mouseLeave(screen.getByTestId("button-component"));

		//Assert
		expect(screen.getByTestId("button-hover")).not.toHaveClass("transition");
	});
});
