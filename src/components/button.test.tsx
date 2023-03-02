import {render} from "@testing-library/react";
import Button, {Props} from "./button";

describe("<Button/>", () => {
	it("should be rendered succesfully", () => {
		// Arrange
		const props: Props = {};

		// Act
		const {getByTestId} = render(<Button {...props} />);

		// Assert
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(getByTestId("button-component")).not.toBeNull();
	});

	it("should have primary classname when variant is primary", () => {
		// Arrange
		const props: Props = {variant: "primary"};

		// Act
		const {container} = render(<Button {...props} />);

		// Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstElementChild).toHaveClass(
			"justify-center text-sm text-c-white font-semibold bg-c-blue px-[1rem] min-h-[2.875rem] rounded-lg",
		);
	});
});
