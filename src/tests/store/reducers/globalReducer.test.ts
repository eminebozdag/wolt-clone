import {GlobalActionType} from "../../../store/actions/globalActions";
import globalReducer from "../../../store/reducers/globalReducer";

describe("globalReducer", () => {
	it("should return initial state", () => {
		// Arrange
		const initialState: any = {showLoginModal: true};
		const action: any = {};

		// Act
		const result = globalReducer(initialState, action);

		// Assert
		expect(result).toBe(initialState);
	});

	it("should set state when action type is show login modal", () => {
		// Arrange
		const action: any = {type: GlobalActionType.DISPATCH_SHOW_LOGIN_MODAL, show: true};

		// Act
		const result = globalReducer({} as any, action);

		// Assert
		expect(result.showLoginModal).toBe(action.show);
	});
});
