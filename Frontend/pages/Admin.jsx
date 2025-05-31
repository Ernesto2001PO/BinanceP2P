import React from "react";

import { Container, Tab, Tabs } from "react-bootstrap";
import MonedaCrud from "../components/admin/MonedaCRUD";
import UsuarioAdmin from "../components/admin/UsuarioAdmin";

function Admin() {

  const styleContainer = {
    backgroundColor: "#554c5f",
    width: "100%",
    height: "100vh",
    padding: "20px",
  };

  return (
    <>
      <Container className="mt-4" style={styleContainer}>
        <Tabs defaultActiveKey="moneda" id="admin-tabs" className="mb-3">
          <Tab eventKey="moneda" title="Monedas">
            <MonedaCrud />
          </Tab>
          <Tab eventKey="usuarios" title="Usuarios">
            <UsuarioAdmin />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Admin;
