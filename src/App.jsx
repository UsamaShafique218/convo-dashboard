import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import your pages 

import "../src/custom.css"
import "../src/custom_responsive.css"
import Home from "./pages/dashboard/Home";
import Users from "./pages/dashboard/Users";

export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/dashbaord/home" element={<Home />} /> 
        <Route path="/users" element={<Users />} /> 
      </Routes>
    </BrowserRouter>
  );
}
