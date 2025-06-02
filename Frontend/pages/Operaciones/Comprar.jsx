import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import OperacionesRepository from "../../repositories/OperacionesRepository";

const Comprar = () => {
    const [anuncios, setAnuncios] = useState(null);

    useEffect(() => {
        const id_usuario = localStorage.getItem("id_usuario");
        if (!id_usuario) {
            console.error("Usuario no autenticado");
            return;
        }

        OperacionesRepository.traerAnunciosVentaMenosElPropio(id_usuario)
            .then(data => {
                setAnuncios(Array.isArray(data.anuncios) ? data.anuncios : []);
            })
            .catch(err => {
                console.error(err);
                setAnuncios([]);
            });
    }, []);

    return (
        <div>
            <h2>Anuncios de Venta</h2>
            {anuncios === null ? (
                <div>Cargando...</div>
            ) : anuncios.length === 0 ? (
                <div>No hay anuncios disponibles.</div>
            ) : (
                anuncios.map((anuncio, idx) => (
                    <div key={anuncio.id_anuncio || idx} style={{
                        background: "#222",
                        color: "#fff",
                        borderRadius: "10px",
                        padding: "20px",
                        marginBottom: "15px"
                    }}>
                        <div><strong>Vendedor:</strong> {anuncio.usuario?.nombre || "N/A"}</div>
                        <div><strong>Email:</strong> {anuncio.usuario?.email || "N/A"}</div>
                        <div><strong>Criptomoneda:</strong> {anuncio.Moneda?.nombre || "N/A"} ({anuncio.Moneda?.simbolo || ""})</div>
                        <div><strong>Monto:</strong> {anuncio.monto}</div>
                        <div><strong>Fecha:</strong> {new Date(anuncio.fecha_anuncio).toLocaleString()}</div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Comprar; 