import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login"
import Registro from "./pages/Registro";
import Page from "./pages/Page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
