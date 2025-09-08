import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import your pages
import Home from "./pages/Home"; 

import "../src/custom.css"
import "../src/custom_responsive.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}
