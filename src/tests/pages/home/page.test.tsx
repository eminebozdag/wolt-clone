import {render, screen} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import Page from "../../../pages/home/page";
import reducers from "../../../store/combine";

const mockStore = createStore(reducers, {
	globalReducer: {},
} as any);

describe("<Page/>", () => {
	it("should render successfully", () => {
		//Arrange
		const component = (
			<Provider store={mockStore}>
				<Page />
			</Provider>
		);

		//Act
		render(component);

		//Assert
		expect(screen.getByTestId("layout-component")).not.toBeNull();
	});
});
