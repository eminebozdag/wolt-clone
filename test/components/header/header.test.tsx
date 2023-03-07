import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import Header from "../../../src/components/header/header";
import reducers from "../../../src/store/combine";

const mockStore = createStore(reducers, {
	globalReducer: {},
} as any);

describe("<Header/>", () => {
	it("should render successfully", () => {
		// Arrange
		const component = (
			<Provider store={mockStore}>
				<Header />
			</Provider>
		);

		// Act
		render(component);

		// Assert
		expect(screen.getByTestId("container-component")).not.toBeNull();
		expect(screen.getByTestId("wolt-logo")).not.toBeNull();
		expect(screen.getByTestId("login-component")).not.toBeNull();
	});
});
