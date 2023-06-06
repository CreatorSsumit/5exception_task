import React from "react";
import Navbar from "./Component/Navbar";
import Articles from "./Component/Articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectedPage from "./Component/SelectedPage";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:id" element={<SelectedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
