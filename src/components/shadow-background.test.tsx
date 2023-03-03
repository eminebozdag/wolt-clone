import {render} from "@testing-library/react";
import ShadowBackground, {Props} from "./shadow-background";

describe("<ShadowBackground/>", () => {
	it("should be rendered successfully", () => {
		// Arrange
		const props: Props = {};

		// Act
		const {getByTestId} = render(<ShadowBackground {...props} />);

		// Assert
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(getByTestId("shadowBg-component")).not.toBeNull();
	});

	it("should have modal classname when type is modal", () => {
		// Arrange
		const props: Props = {type: "modal"};

		// Act
		const {container} = render(<ShadowBackground {...props} />);

		// Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstElementChild).toHaveClass("fixed flex items-center justify-center z-40 bg-c-font-gray/70");
	});

	it("should have children if children props exist", () => {
		//Arrange
		const props: Props = {children: <div></div>};

		//Act
		const {container} = render(<ShadowBackground {...props} />);
		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstElementChild?.children.length).not.toBe(0);
	});
});
