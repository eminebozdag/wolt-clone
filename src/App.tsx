import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginModal from "./components/header/components/login-modal/login-modal";
import PAGES from "./pages/page.config";
import { dispatchShowLoginModal } from "./store/actions/globalActions";

function App() {
  const { showLoginModal } = useSelector((state: any) => state.globalReducer);
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(dispatchShowLoginModal(false));
  };

  return (
    <div data-testid="app" className="app">
      <BrowserRouter>
        <Routes>
          {PAGES.map((page) => {
            return (
              <Route
                key={page.title}
                path={page.route}
                element={<page.Component />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>

      {showLoginModal && <LoginModal onClickAway={handleDispatch} />}
    </div>
  );
}

export default App;
