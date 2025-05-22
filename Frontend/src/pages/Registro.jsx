import React, { use, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import userRepository from "../repositories/User";

function Registro() {
  ``;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        const response = await userRepository.registerUser({
          username,
          email,
          password,
          confirmPassword,
        });
        if (response) {
          alert("Registro exitoso");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error en el registro");
      }
    };
  }, []);
  
  return (
    <div
      className="d-flex min-vh-100 align-items-center"
      style={{ background: "#363636" }}
    >
      <div className="container" style={{ maxWidth: 600 }}>
        <h1 className="text-center text-primary  mb-4">Registro</h1>

        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label className="text-primary">Nombres</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre completo"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="text-primary">Correo</Form.Label>
            <div className="input-group">
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password"> 
            <Form.Label className="text-primary">Contraseña</Form.Label>
            <div className="input-group">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="text-primary">
              Confirmar Contraseña
            </Form.Label>
            <div className="input-group">
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
export default Registro;
