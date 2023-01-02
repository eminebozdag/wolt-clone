import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import pages from "./pages/page.config";

function App() {
  return (
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
  );
}

export default App;
