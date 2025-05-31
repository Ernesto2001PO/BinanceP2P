const models = require("../models");


exports.crearMoneda = async (req, res) => {
    try {
        const { nombre, simbolo } = req.body;

        const monedaExistente = await models.Moneda.findOne({ where: { nombre } });
        if (monedaExistente) {
            return res.status(400).json({ message: "La moneda ya existe" });
        }
        // Crear la nueva moneda
        const nuevaMoneda = await models.Moneda.create({
            nombre,
            simbolo,
        });
        res.status(201).json({
            message: "Moneda creada exitosamente",
            moneda: nuevaMoneda,
        });
    } catch (error) {
        console.error("Error al crear la moneda:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

exports.obtenerMonedas = async (req, res) => {
    try {
        const monedas = await models.Moneda.findAll();
        if (monedas.length === 0) {
            return res.status(404).json({ message: "No se encontraron monedas" });
        }
        res.json(monedas);
    } catch (error) {
        console.error("Error al obtener las monedas:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}
exports.obtenerMonedaPorId = async (req, res) => {
    try {
        const { id_moneda } = req.params;

        const moneda = await models.Moneda.findByPk(id_moneda);
        if (!moneda) {
            return res.status(404).json({ message: "Moneda no encontrada" });
        }
        res.json(moneda);
    } catch (error) {
        console.error("Error al obtener la moneda:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

exports.actualizarMoneda = async (req, res) => {
    try {
        const { id_moneda } = req.params;
        const { nombre, simbolo } = req.body;

        const moneda = await models.Moneda.findByPk(id_moneda);
        if (!moneda) {
            return res.status(404).json({ message: "Moneda no encontrada" });
        }

        // Actualizar los campos de la moneda
        moneda.nombre = nombre || moneda.nombre;
        moneda.simbolo = simbolo || moneda.simbolo;

        await moneda.save();

        res.json({
            message: "Moneda actualizada exitosamente",
            moneda,
        });
    } catch (error) {
        console.error("Error al actualizar la moneda:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}
exports.eliminarMoneda = async (req, res) => {
    try {
        const { id_moneda } = req.params;

        const moneda = await models.Moneda.findByPk(id_moneda);
        if (!moneda) {
            return res.status(404).json({ message: "Moneda no encontrada" });
        }

        await moneda.destroy();

        res.json({ message: "Moneda eliminada exitosamente" });
    } catch (error) {
        console.error("Error al eliminar la moneda:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}