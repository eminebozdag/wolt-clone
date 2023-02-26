import {GlobalActionType} from "../actions/globalActions";

const initialState = {
	showLoginModal: false,
};

const globalReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GlobalActionType.DISPATCH_SHOW_LOGIN_MODAL:
			return {showLoginModal: action.show};
		default:
			return state;
	}
};

export default globalReducer;
