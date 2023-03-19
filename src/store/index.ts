import {configureStore} from "@reduxjs/toolkit";
import reducer from "./combine";

/* istanbul ignore file */
const logStyle = "background: blue; color: #fff";

const loggerMiddleware =
	(store: any) =>
	(next: any) =>
	(action: any): any => {
		console.log("%cDISPATCH", logStyle, action);
		let result = next(action);
		console.log("%cNEXT STATE", logStyle, store.getState());
		console.log("-------------------------");
		return result;
	};

export const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware: any) => {
		if (process.env.NODE_ENV === "production") return getDefaultMiddleware();

		return [loggerMiddleware, ...getDefaultMiddleware()];
	},
});
