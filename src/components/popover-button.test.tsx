import {render, screen} from "@testing-library/react";
import PopoverButton, {Props} from "./popover-button";

describe("<PopoverButton/>", () => {
	it("should be rendere successfully", () => {
		//Arrange
		const props: Props = {};

		//Act
		render(<PopoverButton {...props} />);

		//Assert
		expect(screen.getByTestId("popover-button-component")).not.toBeNull();
	});
});
