import {render, screen} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import LoginButton from "../../../components/header/login-button";
import reducers from "../../../store/combine";

const mockStore = createStore(reducers, {
	globalReducer: {},
} as any);

describe("<LoginButton/>", () => {
	it("should render successfully", () => {
		//Arrange
		const component = (
			<Provider store={mockStore}>
				<LoginButton />
			</Provider>
		);

		//Act
		render(component);

		//Assert
		expect(screen.getByTestId("login-component")).not.toBeNull();
	});
});
