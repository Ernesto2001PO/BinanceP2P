import React from "react";
import Menu from "../components/Menu";
import { useAuth } from "../../hook/useAuth";
import { useEffect } from "react";
import BilleteraRepository from "../repositories/BilleteraRepository";
const Page = () => {
  const { isAuthenticated } = useAuth(false);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const { id_usuario } = useParams(); 






  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
    try {
      const getBilleteraByUser = async () => {
        const data = await BilleteraRepository.obtenerBilleteraPorUsuarioId(id_usuario);
        if (data) {
          console.log("Billetera obtenida:", data);
        } else {
          console.log("No se encontró la billetera para el usuario.");
        }
      }
      getBilleteraByUser();
    } catch (error) {
      console.error("Error fetching wallet:", error);
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
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
      <h2>Ingrese el monto que desea agregar</h2>
      {array.map(element => (
        <option key={element.id} value={element.id}>{element.nombre}</option>
      ))}
    </div>
  );
};

export default Page;
