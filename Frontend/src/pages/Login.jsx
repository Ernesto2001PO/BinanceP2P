import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import MenuLogin from "../components/MenuLogin";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = (e) => {
      e.preventDefault();
      


      
    setShowAlert(true);
  };

  return (
      <div>
        <MenuLogin />
      <div
        className="d-flex min-vh-100 align-items-center"
        style={{ background: "#363636" }}
      >
        <div className="container" style={{ maxWidth: 600 }}>
          <h1 className="text-center text-primary  mb-4">Login</h1>
          {showAlert && (
            <Alert
              variant="info"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Contact support for assistance.
            </Alert>
          )}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="text-primary">Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuario o correo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-primary">Contraseña</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  variant="outline-secondary"
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </Button>
              </div>
            </Form.Group>
            <Button type="submit" className="w-100 mb-2" variant="primary">
              Iniciar sesión
            </Button>
            <Button className="w-100" variant="secondary">
              <Link className="text-white" to="/register">Crear cuenta</Link>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
