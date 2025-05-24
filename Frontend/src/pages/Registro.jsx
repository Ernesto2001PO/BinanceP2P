import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import userRepository from "../repositories/User";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      const response = userRepository.registerUser({ nombre, email, password_hash: password });
      if (response) {
        alert("Registro exitoso");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en el registro");
    }
  };

  return (
    <div
      className="d-flex min-vh-100 align-items-center"
      style={{ background: "#363636" }}
    >
      <div className="container" style={{ maxWidth: 600 }}>
        <h1 className="text-center text-primary mb-4">Registro</h1>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label className="text-primary">Nombres</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre completo"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="text-primary">Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="text-primary">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-3"
            style={{ background: "#007bff", border: "none" }}
          >
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Registro;