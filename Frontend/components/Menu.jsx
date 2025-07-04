import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useAuth } from "./../hook/useAuth";
import Button from "react-bootstrap/Button";

function Menu() {
  const { isAuthenticated, logout } = useAuth(false);
  const userName = localStorage.getItem("user");

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">Proyecto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="me-auto">
            <>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </>
            {location.pathname !== "/admin" && localStorage.getItem("tipo_usuario") === "admin" && (
              <NavLink to="/admin" className="nav-link">
                Admin
              </NavLink>
            )}
            <>
              {!isAuthenticated && location.pathname !== "/login" && location.pathname !== "/register" && (
                <>
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>


                  <NavLink to="/" className="nav-link">
                    {userName}
                  </NavLink>

                </>
              )}
            </>
            <>
              {isAuthenticated && (
                <>
                  <Button variant="link" onClick={logout}>
                    Cerrar Sesión
                  </Button>
                </>
              )}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
