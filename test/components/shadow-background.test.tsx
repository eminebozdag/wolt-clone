import {render, screen} from "@testing-library/react";
import ShadowBackground, {Props} from "../../src/components/shadow-background";

describe("<ShadowBackground/>", () => {
	it("should render successfully", () => {
		// Arrange
		const props: Props = {};

		// Act
		render(<ShadowBackground {...props} />);

		// Assert
		expect(screen.getByTestId("shadow-background-component")).not.toBeNull();
	});

	it("should have modal classname when type is modal", () => {
		// Arrange
		const props: Props = {type: "modal"};

		// Act
		render(<ShadowBackground {...props} />);

		// Assert
		expect(screen.getByTestId("shadow-background-component")).toHaveClass("bg-c-font-gray/70");
	});

	it("should have children if children props exist", () => {
		//Arrange
		const props: Props = {children: <div></div>};

		//Act
		render(<ShadowBackground {...props} />);

		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(screen.getByTestId("shadow-background-component").children.length).not.toBe(0);
	});
});
