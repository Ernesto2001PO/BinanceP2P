``
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Table, Button } from "react-bootstrap";
import MonedaRepository from "../../repositories/MonedaRepository";
import { useNavigate } from "react-router-dom";
import '../../public/css/CrudMonedas.css'; 
const MonedaCRUD = () => {
  console.log("MonedaCRUD component rendered");
  const [monedas, setMonedas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
    // const BASEURL = "http://localhost:3000";
    
    
  const handleCreate = () => {
    navigate("/admin/create-moneda");
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-moneda/${id}`);
  };

  useEffect(() => {
    const fetchMonedas = async () => {
      try {
        const data = await MonedaRepository.getAllMonedas();
        console.log("Datos obtenidos:", data);
        setMonedas(data);
      } catch (error) {
        console.error("Error en fetchMonedas:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMonedas();
  }, []);

  if (loading) {
    return <div style={{ color: "*#000000" }}>Loading...</div>;
  }
  if (error) {
    return <div style={{ color: "#000000" }}>Error: {error}</div>;
  }

  return (
    <div style={{ backgroundColor: "#554c5f" , width: "100%", height: "100vh", padding: "20px" }}>
      <h1>CRUD de MONEDAS</h1>
      <p>Esta sección permite gestionar las monedas de la aplicación.</p>
      <p>Funcionalidad no implementada.</p>
      <h5>Gestión de Monedas</h5>
      <Button variant="success" className="mb-3" onClick={handleCreate}>
        Crear Moneda
      </Button>
      <div>
        <Container className="mt-3">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Table striped bordered hover size="sm" responsive>
                    <thead>
                      <tr>
                        <th>Id Moneda</th>
                        <th>Nombre</th>
                        <th>Simbolo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monedas.length > 0 ? (
                        monedas.map((moneda) => (
                          <tr key={moneda.id_moneda}>
                            <td>{moneda.id_moneda}</td>
                            <td>{moneda.nombre}</td>
                            <td>{moneda.simbolo}</td>
                            <td>
                              <Button
                                variant="warning"
                                size="sm"
                                onClick={() => handleEdit(moneda.id_moneda)}
                              >
                                Editar
                              </Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3">No hay monedas disponibles</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default MonedaCRUD;
