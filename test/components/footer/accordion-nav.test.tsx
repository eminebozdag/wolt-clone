import {fireEvent, render, screen} from "@testing-library/react";
import AccordionNavigation, {Props} from "../../../src/components/footer/accordion-nav";

describe("<AccordionNavigation/>", () => {
	it("should render successfully", () => {
		//Arrange
		const props: Props = {};

		//Act
		render(<AccordionNavigation {...props} />);

		//Assert
		expect(screen.getByTestId("accordion-navigation-component")).not.toBeNull();
		expect(screen.getByTestId("button-component")).not.toBeNull();
		expect(screen.getByTestId("down-arrow-icon")).not.toBeNull();
	});

	it("should click event can work properly", () => {
		//Arrange
		const props: Props = {};

		//Act
		render(<AccordionNavigation {...props} />);
		fireEvent.click(screen.getByTestId("button-component"));

		//Assert

		expect(screen.getByTestId("down-arrow-icon")).toHaveClass("rotate-180");
	});
});
