import {render} from "@testing-library/react";
import Container, {Props} from "./container";
describe("<Container/>", () => {
	it("should be rendered successfully", () => {
		//Arrange
		const props: Props = {};

		//Act
		const {getByTestId} = render(<Container {...props} />);

		//Assert
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(getByTestId("container-component")).not.toBeNull();
	});

	it("should have classname if classname passed as a prop", () => {
		//Arrange
		const props: Props = {className: "bg-c-white"};

		//Act
		const {container} = render(<Container {...props} />);

		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstElementChild).toHaveClass("bg-c-white");
	});

	it("should have children if children props exist", () => {
		//Arrange
		const props: Props = {children: <div></div>};

		//Act
		const {container} = render(<Container {...props} />);
		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(container.firstElementChild?.children.length).not.toBe(0);
	});
});
