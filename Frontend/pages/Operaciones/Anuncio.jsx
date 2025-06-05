import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

import { useParams, useNavigate } from 'react-router-dom';
import OperacionesRepository from "../../repositories/OperacionesRepository";
import Menu from "../../components/Menu";





const Anuncio = () => {
    const { id_billetera } = useParams();
    const navigate = useNavigate();
    const [moneda, setMoneda] = useState("");
    const [tipoAnuncio, setTipoAnuncio] = useState("");
    const [monto, setMonto] = useState("");
    const [descripcion, setDescripcion] = useState("");




    const id_usuario = localStorage.getItem("id_usuario");
    if (!id_usuario) {
        return (
            <div>
                <h2>Error</h2>
                <p>No se ha encontrado el usuario. Por favor, inicie sesión nuevamente.</p>
            </div>
        );
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id_billetera", id_billetera);
        formData.append("id_usuario", id_usuario);
        formData.append("id_moneda", moneda);
        formData.append("tipo_anuncio", tipoAnuncio);
        formData.append("monto", monto);
        formData.append("descripcion", descripcion);
        console.log("Formulario enviado");

        try {

            await OperacionesRepository.crearAnuncio(formData)
            console.log("Anuncio creado exitosamente");
            alert("Anuncio creado exitosamente");
            navigate(`/operar/${id_billetera}`);

        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            return (
                <div>
                    <h2>Error</h2>
                    <p>Ocurrió un error al procesar su solicitud. Por favor, inténtelo de nuevo más tarde.</p>
                </div>
            );
        }
    }





    return (
        <>
            <Menu />
            
        <div style={{ padding: "60px" }}> 
            <h2>Anuncio</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formMoneda">
                    <Form.Label>Moneda</Form.Label>
                    <Form.Select
                        value={moneda}
                        onChange={(e) => setMoneda(e.target.value === "" ? "" : Number(e.target.value))}
                    >
                        <option value={0}>Seleccione una moneda</option>
                        <option value={1}>Bitcoin (BTC)</option>
                        <option value={2}>USDT (Tether)</option>
                        <option value={3}>Ethereum (ETH)</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTipoAnuncio">
                    <Form.Label>Tipo de Anuncio</Form.Label>
                    <Form.Select value={tipoAnuncio} onChange={(e) => setTipoAnuncio(e.target.value)}>
                        <option value="">Seleccione un tipo de anuncio</option>
                        <option value="compra">Comprar</option>
                        <option value="venta">Vender</option>
                    </Form.Select>
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

                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Ingrese una descripción"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                    </Button>
                    <Button variant="danger" onClick={() => navigate(`/operar/${id_billetera}`)} className="ms-2">
                        Volver
                    </Button>
            </Form>
            </div>
        </>
    );
}


export default Anuncio;