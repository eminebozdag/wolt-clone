import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginModal from "./components/header/login-modal/login-modal";
import ShadowBackground from "./components/shadow-background";
import PAGES from "./pages/page.config";
import {dispatchShowLoginModal} from "./store/actions/globalActions";

function App() {
	const {showLoginModal} = useSelector((state: any) => state.globalReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		showLoginModal && (document.body.style.overflow = "hidden");
		return () => {
			document.body.style.overflow = "scroll";
		};
	});

	const handleDispatch = () => {
		dispatch(dispatchShowLoginModal(false));
	};

	return (
		<div data-testid="app-component">
			<BrowserRouter>
				<Routes>
					{PAGES.map((page) => {
						return <Route key={page.title} path={page.route} element={<page.Component />} />;
					})}
				</Routes>
			</BrowserRouter>

			{showLoginModal && (
				<ShadowBackground type="modal">
					<LoginModal onClickAway={handleDispatch} />
				</ShadowBackground>
			)}
		</div>
	);
}

export default App;
