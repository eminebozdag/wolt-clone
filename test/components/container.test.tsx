import {render, screen} from "@testing-library/react";
import Container, {Props} from "../../src/components/container";
describe("<Container/>", () => {
	it("should render successfully", () => {
		//Arrange
		const props: Props = {};

		//Act
		render(<Container {...props} />);

		//Assert
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(screen.getByTestId("container-component")).not.toBeNull();
	});

	it("should have classname if classname props exist", () => {
		//Arrange
		const props: Props = {className: "bg-c-white"};

		//Act
		render(<Container {...props} />);

		//Assert
		expect(screen.getByTestId("container-component")).toHaveClass("flex bg-c-white");
	});

	it("should have children if children props exist", () => {
		//Arrange
		const props: Props = {children: <div></div>};

		//Act
		render(<Container {...props} />);

		//Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(screen.getByTestId("container-component").children.length).toBe(1);
	});
});