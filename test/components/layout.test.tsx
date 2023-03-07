import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import Layout, {Props} from "../../src/components/layout";
import reducers from "../../src/store/combine";

const mockStore = createStore(reducers, {
	globalReducer: {},
} as any);
describe("<Layout/>", () => {
	it("should render successfully", () => {
		// Arrange
		const component = (
			<Provider store={mockStore}>
				<Layout />
			</Provider>
		);

		// Act
		render(component);

		// Assert
		expect(screen.getByTestId("layout-component")).not.toBeNull();
		expect(screen.getByTestId("header-component")).not.toBeNull();
		expect(screen.getByTestId("footer-component")).not.toBeNull();
	});

	it("should have children if children props exist", () => {
		// Arrange
		const props: Props = {children: <div></div>};
		const component = (
			<Provider store={mockStore}>
				<Layout {...props} />
			</Provider>
		);

		// Act
		render(component);

		// Assert
		// eslint-disable-next-line testing-library/no-node-access
		expect(screen.getByTestId("layout-children").children.length).toBe(1);
	});
});
