import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OperacionesRepository from "../../repositories/OperacionesRepository";
import { Form, Button } from "react-bootstrap";
import Menu from "../../components/Menu";

const Transferir = () => {
    const { id_billetera_origen } = useParams();
    const navigate = useNavigate();

    const [id_billetera_destino, setIdBilleteraDestino] = useState("");
    const [monto, setMonto] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData();
        formData.append("id_billetera_origen", id_billetera_origen);
        formData.append("id_billetera_destino", id_billetera_destino);
        formData.append("monto", monto);

        try {
            if (!id_billetera_destino || !monto) {
                alert("Por favor, complete todos los campos.");
                return;
            }
            if (isNaN(monto) || parseFloat(monto) <= 0) {
                alert("El monto debe ser un número positivo.");
                return;
            }
            if (id_billetera_origen === id_billetera_destino) {
                alert("No puede transferir a la misma billetera.");
                return;
            }

            await OperacionesRepository.hacerTransferencia(formData)
            navigate(`/operar/${id_billetera_origen}`);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Ocurrió un error al procesar su solicitud. Probablemente ests yesca adulau.");
        }
    }

    return (
        <>
            <Menu />
            <div style={{ padding: "60px" }}>
                <h2>Transferir</h2>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBilleteraDestino">
                        <Form.Label>Billetera Destino</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el ID de la billetera destino"
                            value={id_billetera_destino}
                            onChange={(e) => setIdBilleteraDestino(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMonto">
                        <Form.Label>Monto</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el monto"
                            value={monto}
                            onChange={(e) => setMonto(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <Button variant="danger" onClick={() => navigate(`/operar/${id_billetera_origen}`)} className="ms-2">
                        Volver
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Transferir;