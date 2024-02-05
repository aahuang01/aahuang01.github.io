import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./base.css";
import "./assets/sass/style.scss";
import Work from "./pages/Work";
import About from "./pages/About";
import CV from "./pages/CV";
import AnimationLayout from "./components/AnimationLayout";
import Edenspiekermann from "./pages/Edenspiekermann";

export const AuthenticatedContext = createContext<any>(null);

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <AuthenticatedContext.Provider
        value={{
          authenticated: authenticated,
          setAuthenticated: setAuthenticated,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AnimationLayout />}>
              <Route index element={<Work />} />
              <Route path="about" element={<About />} />
              <Route path="cv" element={<CV />} />
              <Route path="edenspiekermann" element={<Edenspiekermann />} />
              <Route path="*" element={<div>todo</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthenticatedContext.Provider>
    </>
  );
};

export default App;
