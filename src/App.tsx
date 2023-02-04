import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginModal from "./components/header/components/login-modal";
import pages from "./pages/page.config";

function App() {
  const { showLoginModal } = useSelector((state: any) => state.globalReducer);
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

      {showLoginModal && <LoginModal />}
    </div>
  );
}

export default App;
