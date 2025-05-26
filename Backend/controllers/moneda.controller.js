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