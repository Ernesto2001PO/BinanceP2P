const models = require('../models/');


exports.crearBilletera = async (req, res) => {
    try {
        const { id_usuario, id_moneda, saldo } = req.body;

        const billeteraExistente = await models.Billetera.findOne({
            where: { id_usuario, id_moneda }
        });

        if (billeteraExistente) {
            return res.status(400).json({ message: "La billetera ya existe para este usuario y moneda" });
        }

        const nuevaBilletera = await models.Billetera.create({
            id_usuario,
            id_moneda,
            saldo: saldo || 0 
        });

        res.status(201).json({
            message: "Billetera creada exitosamente",
            billetera: nuevaBilletera
        });
    } catch (error) {
        console.error("Error al crear la billetera:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}
exports.obtenerBilleterasPorUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;

        const billeteras = await models.Billetera.findAll({
            where: { id_usuario },
            include: [
                {
                    model: models.Usuario,
                    as: 'usuario',
                    attributes: ['id', 'nombre', 'email']
                },
                {
                    model: models.Moneda,
                    attributes: ['id_moneda', 'nombre', 'simbolo']
                }
            ]
        });

        if (billeteras.length === 0) {
            return res.status(404).json({ message: "No se encontraron billeteras para este usuario" });
        }


        res.json({ billeteras });
    } catch (error) {
        console.error("Error al obtener las billeteras:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

exports.obtenerBilleteraPorId = async (req, res) => {
    try {
        const { id_billetera } = req.params;

        const billetera = await models.Billetera.findByPk(id_billetera);
        if (!billetera) {
            return res.status(404).json({ message: "Billetera no encontrada" });
        }
        const billeteraConDetalles = await models.Billetera.findOne({
            where: { id_billetera },
            include: [
                {
                    model: models.Usuario,
                    as: 'usuario',
                    attributes: ['id', 'nombre', 'email']
                },
                {
                    model: models.Moneda,
                    attributes: ['id_moneda', 'nombre', 'simbolo']
                }
            ]
        });

        if (!billetera) {
            return res.status(404).json({ message: "Billetera no encontrada" });
        }

        res.json(billeteraConDetalles);
    } catch (error) {
        console.error("Error al obtener la billetera:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

exports.obtenerBillteraPorMoneda = async (req, res) => {
    try {
        const { id_moneda } = req.params;

        const billeteras = await models.Billetera.findAll({
            where: { id_moneda }
        });

        if (billeteras.length === 0) {
            return res.status(404).json({ message: "No se encontraron billeteras para esta moneda" });
        }

        res.json(billeteras);
    } catch (error) {
        console.error("Error al obtener las billeteras por moneda:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}






exports.actualizarBilletera = async (req, res) => {
    try {
        const { id_billetera } = req.params;
        const { saldo } = req.body;

        // Actualizar la billetera
        const [updated] = await models.Billetera.update({ saldo }, {
            where: { id_billetera }
        });

        if (!updated) {
            return res.status(404).json({ message: "Billetera no encontrada" });
        }

        res.json({ message: "Billetera actualizada exitosamente" });
    } catch (error) {
        console.error("Error al actualizar la billetera:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}
exports.eliminarBilletera = async (req, res) => {
    try {
        const { id_billetera } = req.params;

        const deleted = await models.Billetera.destroy({
            where: { id_billetera }
        });

        if (!deleted) {
            return res.status(404).json({ message: "Billetera no encontrada" });
        }

        res.json({ message: "Billetera eliminada exitosamente" });
    } catch (error) {
        console.error("Error al eliminar la billetera:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}