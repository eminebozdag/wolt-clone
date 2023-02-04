import { combineReducers } from "redux";
import globalReducer from "./reducers/globalReducer";

const reducers = combineReducers({
  globalReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
