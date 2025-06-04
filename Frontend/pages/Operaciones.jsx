import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BilleteraRepository from '../repositories/BilleteraRepository';
import Menu from '../components/Menu';

const Operar = () => {
    const { id_billetera } = useParams();
    const navigate = useNavigate();
    const [billetera, setBilletera] = useState(null);

    useEffect(() => {
        const fetchBilletera = async () => {
            try {
                const data = await BilleteraRepository.obtenerBilleteraPorId(id_billetera);
                setBilletera(data);
            } catch (error) {
                console.error("Error fetching wallet:", error);
            }
        };

        fetchBilletera();
    }
        , [id_billetera]);


    if (!billetera) return <p>Cargando...</p>;

    return (
        <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
            <Menu />
            <div className="container mt-5 d-flex justify-content-center" style={{ width: '100%' }}>
                <div className="card-body" style={{ width: '100%' }}>
                    <h5 className="card-title mb-3">Detalles de la Billetera</h5>
                    <p className="card-text"><strong>Nombre usuario:</strong> {billetera.usuario?.nombre}</p>
                    <p className="card-text"><strong>Email usuario:</strong> {billetera.usuario?.email}</p>
                    <p className="card-text"><strong>Moneda:</strong> {billetera.Moneda?.nombre} ({billetera.Moneda?.simbolo})</p>
                    <p className="card-text"><strong>Saldo:</strong> {billetera.saldo}</p>
                    <div className="d-flex gap-2 mt-4">
                        <button onClick={() => navigate(`/comprar`)} className="btn btn-success flex-fill">Comprar</button>
                        <button onClick={() => navigate(`/vender`)} className="btn btn-warning flex-fill">Vender</button>
                        <button onClick={() => navigate(`/transferir`)} className="btn btn-info flex-fill">Transferir</button>
                        <button onClick={() => navigate(`/anuncios/${id_billetera}`)} className="btn btn-secondary flex-fill">Crear Anuncio</button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <button onClick={() => navigate('/page')} className="btn btn-danger">Volver a Billeteras</button>
            </div>
        </div>
    );

};

export default Operar;
