import React from "react";
import Menu from "../components/Menu";
import { useAuth } from "../../hook/useAuth";

const Page = () => {
  const { isAuthenticated } = useAuth(false);
  if (!isAuthenticated) {
    window.location.href = "/login";
  }

  return (
    <div>
      <Menu />
      <h1>Bienvendio a su Billetera Virtual</h1>
      <h2>Ingrese el tipo de moneda que quiere trabajar</h2>
      <select>
        Elija
        <option value="0">Dolar</option>
        <option value="1">Bolivianos</option>
        <option value="2">Reales</option>
        <option value="3">Pesos Argentinos</option>
      </select>
    </div>
  );
};

export default Page;
