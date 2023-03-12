import {combineReducers} from "redux";
import globalReducer from "./reducers/globalReducer";

/* istanbul ignore file */
const reducers = combineReducers({
	globalReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
