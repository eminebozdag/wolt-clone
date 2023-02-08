import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginModal from "./components/header/components/login-modal/login-modal";
import pages from "./pages/page.config";
import { dispatchShowLoginModal } from "./store/actions/globalActions";

function App() {
  const { showLoginModal } = useSelector((state: any) => state.globalReducer);
  const dispatch = useDispatch();

  return (
    <div data-testid="app" className="app">
      <BrowserRouter>
        <Routes>
          {pages.map((page) => {
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

      <LoginModal
        onClose={() => dispatch(dispatchShowLoginModal(false))}
        show={showLoginModal}
      />
    </div>
  );
}

export default App;
