import React from "react";


import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import MonedaRepository from "../../repositories/MonedaRepository";
import Menu from "../../components/Menu";

const FormMoneda = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [simbolo, setSimbolo] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      const fetchMoneda = async () => {
        try {
          const data = await MonedaRepository.getMonedaById(id);
          console.log("Datos de la moneda:", data);
          setNombre(data.nombre);
          setSimbolo(data.simbolo);
        } catch (error) {
          console.error("Error al cargar la moneda:", error);
        }
      };
      fetchMoneda();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("simbolo", simbolo);

    try {
      if (isEdit) {
        // Si es edición, actualizamos la moneda
        await MonedaRepository.updateMoneda(id, formData);
      } else {
        // Si es creación, creamos la moneda
        await MonedaRepository.createMoneda(formData);
      }
      navigate("/admin");
    } catch (error) {
      console.error(
        isEdit ? "Error al editar moneda:" : "Error al crear moneda:",
        error
      );
    }
  };
  const handleDelete = async (id) => {
    try {
      await MonedaRepository.deleteMoneda(id);
      navigate("/admin");
    } catch (error) {
      console.error("Error al eliminar moneda:", error);
    }
  };

  return (
      <Container className="mt-3">
        <Row>
          <Col xs={6}>
            <Card>

              <Card.Header></Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Nombre</label>
                  <FormControl
                    required
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Simbolo</label>
                  <FormControl
                    required
                    type="text"
                    value={simbolo}
                    onChange={(e) => setSimbolo(e.target.value)}
                  />
                </div>

                <div className="mt-2">
                  <Button variant="primary" type="submit">
                    {isEdit ? "Actualizar" : "Crear"}
                  </Button>
                </div>

                <div>
                  {isEdit && (
                    <Button variant="danger" onClick={() => handleDelete(id)}>
                      Eliminar
                    </Button>
                  )}
                </div>
                <div>
                  <Button variant="warning" onClick={() => navigate("/admin")}>
                    Volver
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
  );
};

export default FormMoneda;
