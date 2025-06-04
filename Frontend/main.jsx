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
import Operaciones from "./pages/Operaciones";
import Admin from "./pages/Admin";

// Pages Operaciones
import Comprar from "./pages/Operaciones/Comprar";
import Vender from "./pages/Operaciones/Vender";
import Anuncio from "./pages/Operaciones/Anuncio";

// admin components
import FormMoneda from "./components/admin/FormMoneda";
import UsuarioAdmin from "./components/admin/UsuarioAdmin";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/page" element={<Page />} />
        <Route path="/operar/:id_billetera" element={<Operaciones />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/usuarios" element={<UsuarioAdmin />} />
        <Route path="/admin/create-moneda" element={<FormMoneda />} />
        <Route path="/admin/edit-moneda/:id" element={<FormMoneda />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/anuncios/:id_billetera" element={<Anuncio />} />



      </Routes>
    </BrowserRouter>
  </StrictMode>
);
