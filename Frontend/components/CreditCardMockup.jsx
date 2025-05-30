import React, { useEffect, useState } from "react";
import BilleteraRepository from "../repositories/BilleteraRepository";

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
        <div className="mx-auto" style={{ maxWidth: 400 }}>
            <div
                style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "20px",
                    color: "#fff",
                    padding: "30px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    minHeight: "200px",
                    position: "relative",
                    fontFamily: "monospace",
                }}
            >
                {billetera && billetera.length > 0 ? (
                    <>
                        <div style={{ fontSize: "1.2em", marginBottom: 20 }}>
                            {billetera[0]?.usuario?.nombre || "Nombre del titular"}
                        </div>
                        <div style={{ fontSize: "1.5em", letterSpacing: 2, marginBottom: 20 }}>
                            {billetera.numero_tarjeta || "•••• •••• •••• ••••"}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <div style={{ fontSize: "0.8em" }}>Válido hasta</div>
                                <div>{billetera  .fecha_expiracion || "MM/AA"}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: "0.8em" }}>Saldo</div>
                                <div>${billetera[0]?.saldo || "0.00"}</div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Cargando...</div>
                )}
            </div>
        </div>
    );
};

export default CreditCardMockup;