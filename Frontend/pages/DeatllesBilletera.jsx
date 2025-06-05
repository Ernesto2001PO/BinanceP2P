import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OperacionesRepository from "../repositories/OperacionesRepository";
import Menu from "../components/Menu";

const DetallesBilletera = () => {
    const { id_billetera } = useParams();
    const [transferencias, setTransferencias] = useState(null);

    useEffect(() => {
        OperacionesRepository.obtenerTransferenciasPorBilletera(id_billetera)
            .then(data => setTransferencias(data.transferencias || []))
            .catch(() => setTransferencias([]));
    }, [id_billetera]);

    return (
        <>
            <Menu />
            <div style={{ padding: "40px" }}>
                <h2>Transferencias de la Billetera</h2>
                {transferencias === null ? (
                    <div>Cargando...</div>
                ) : transferencias.length === 0 ? (
                    <div>No hay transferencias.</div>
                ) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Origen</th>
                                <th>Destino</th>
                                <th>Monto</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transferencias.map((t) => (
                                <tr key={t.id_transferencia}>
                                    <td>{t.id_transferencia}</td>
                                    <td>{t.id_origen}</td>
                                    <td>{t.id_destino}</td>
                                    <td>{t.monto_origen}</td>
                                    <td>{new Date(t.fecha).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default DetallesBilletera;