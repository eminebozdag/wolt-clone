import PAGES from "pages/page.config";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
	return (
		<div data-testid="app-component">
			<BrowserRouter>
				<Routes>
					{PAGES.map((page, index) => {
						return <Route key={index} path={page.route} element={<page.Component />} />;
					})}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
