import React, { useEffect, useState } from "react";
import BilleteraRepository from "../repositories/BilleteraRepository";
import { NavLink } from "react-router-dom";

const CreditCardMockup = () => {
    const [billetera, setBilletera] = useState(null);


    useEffect(() => {
        const id_usuario = localStorage.getItem("id_usuario");
        if (id_usuario) {
            BilleteraRepository.obtenerBilleteraPorUsuarioId(id_usuario)
                .then(data => {
                    setBilletera(data.billeteras);
                })
                .catch(err => console.error(err));
        }
    }, []);


    return (
        <div className="mx-auto" style={{ maxWidth: 2400, padding: "20px" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "20px",
                    width: "100%",
                    color: "#fff",
                    padding: "30px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    minHeight: "200px",
                    position: "relative",
                    fontFamily: "monospace",
                }}
            >
                {billetera && billetera.length > 0 ? (
                    billetera.map((b, idx) => (
                        <div key={b.id_billetera || idx} style={{
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            borderRadius: "20px",
                            color: "#fff",
                            width: "100%",
                            padding: "30px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                            minHeight: "200px",
                            position: "relative",
                            fontFamily: "monospace",
                            marginBottom: "20px"
                        }}>
                            <div style={{ fontSize: "1.2em", marginBottom: 20 }}>
                                {b.usuario?.nombre || "Nombre del titular"}
                            </div>
                            <div style={{ fontSize: "1.5em", letterSpacing: 2, marginBottom: 20 }}>
                                {b.numero_tarjeta || "•••• •••• •••• ••••"}
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <div style={{ fontSize: "0.8em" }}>Válido hasta</div>
                                    <div>{b.fecha_expiracion || "MM/AA"}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.8em" }}>Saldo</div>
                                    <div>{b.Moneda?.simbolo} {b.saldo || "0.00"}</div>
                                    <NavLink style={{
                                        background: "transparent",
                                        border: "none",
                                        color: "#fff",
                                        cursor: "pointer",
                                        fontSize: "0.8em"
                                    }} to={`/detalles/${b.id_billetera}`}>
                                        Ver detalles
                                    </NavLink>
                                    <NavLink to={`/operar/${b.id_billetera}`} style={{
                                        background: "transparent",
                                        color: "#fff",
                                        marginLeft: "10px",
                                        padding: "0",
                                        border: "none",
                                        borderRadius: "5px",
                                        fontSize: "0.8em",
                                        display: "inline-block"
                                    }}>
                                        <button style={{
                                            background: "transparent",
                                            color: "#fff",
                                            border: "1px solid #fff",
                                            borderRadius: "5px",
                                            padding: "5px 10px",
                                            cursor: "pointer",
                                            fontSize: "0.8em"
                                        }}>
                                            Operar
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Cargando...</div>
                )}
            </div>
        </div>
    );
};

export default CreditCardMockup;