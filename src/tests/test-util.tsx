// test-utils.ts
import {configureStore, EmptyObject, EnhancedStore, PreloadedState} from "@reduxjs/toolkit";
import {render as rtlRender, RenderOptions} from "@testing-library/react";
import React, {ReactElement} from "react";
import {Provider} from "react-redux";
import type {RootState} from "store/combine";
import globalReducer from "store/reducers/globalReducer";

type ReducerTypes = Pick<RootState, "globalReducer">;
type TStore = EnhancedStore<ReducerTypes>;

type CustomRenderOptions = {
	preloadedState?: PreloadedState<ReducerTypes & EmptyObject>;
	store?: TStore;
} & Omit<RenderOptions, "wrapper">;

function render(ui: ReactElement, options?: CustomRenderOptions) {
	const {preloadedState} = options || {};

	const store =
		options?.store ||
		configureStore({
			reducer: {
				globalReducer,
			},
			preloadedState,
		});

	function Wrapper({children}: {children: React.ReactNode}) {
		return <Provider store={store}>{children}</Provider>;
	}

	return rtlRender(ui, {wrapper: Wrapper, ...options});
}

export * from "@testing-library/react";
export {render};
