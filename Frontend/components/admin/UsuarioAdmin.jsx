import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table, Button } from "react-bootstrap";
import User from "../../repositories/User";

const UsuarioAdmin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const users = await User.getAllUsers();
                console.log("Usuarios obtenidos:", users);
                setUsers(users);
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        }
        getUsers();
    }, []);


    const makeAdmin = async (userId) => {
        try {

            await User.makeAdmin(userId);
        } catch (error) {
            console.error("Error al promover usuario a administrador:", error);
        }
    }






    return (
        <>
            <div>
                <h1>Usuarios</h1>
                <p>Funcionalidad no implementada.</p>
            </div>

            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h5>Gestión de Usuarios</h5>

                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                            <th>Rol</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.nombre}</td>
                                                <td>{user.email}</td>
                                                <td>{user.rol}</td>
                                                {user.rol === 'admin' ? (
                                                    <td>
                                                        <Button variant="secondary" size="sm" disabled>
                                                            Ya es administrador
                                                        </Button>
                                                    </td>
                                                ) : (
                                                    <td>
                                                        <Button variant="primary" size="sm" disabled>
                                                            No es administrador
                                                        </Button>
                                                    </td>
                                                )}
                                                <td>
                                                    {user.rol === 'usuario' && (
                                                        <Button variant="warning" size="sm" className="me-2" onClick={() => makeAdmin(user.id)}>
                                                            Hacer administrador
                                                        </Button>
                                                    )}

                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="4">Total de usuarios: {users.length}</td>
                                        </tr>
                                    </tfoot>

                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>


    );
}

export default UsuarioAdmin;
