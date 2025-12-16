import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<LandingPage />} />
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
