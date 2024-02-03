import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./base.css";
import "./assets/sass/style.scss";
import Work from "./pages/Work";
import About from "./pages/About";
import CV from "./pages/CV";
import AnimationLayout from "./pages/AnimationLayout";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnimationLayout />}>
            <Route index element={<Work />} />
            <Route path="about" element={<About />} />
            <Route path="cv" element={<CV />} />
            <Route path="*" element={<div>todo</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
