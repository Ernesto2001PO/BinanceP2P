import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


function MenuLogin() {
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
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MenuLogin;
