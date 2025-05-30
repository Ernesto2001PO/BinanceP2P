import React from "react";
import Menu from "../components/Menu";
import { useAuth } from "./../hook/useAuth";
import { useEffect,useState } from "react";
//import BilleteraRepository from "../repositories/BilleteraRepository";
import { useParams } from "react-router-dom";
import CreditCardMockup from "../components/CreditCardMockup";
const Page = () => {
  const { isAuthenticated } = useAuth(false);
  const [error, setError] = useState(null);
  const { id_usuario } = useParams(); 










  return (
    <div>
      <Menu />
      <h1>Bienvendio a su Billetera Virtual</h1>
      <h2>Ingrese el tipo de moneda que quiere trabajar</h2>

      <CreditCardMockup />
      
    
    </div>
  );
};

export default Page;
