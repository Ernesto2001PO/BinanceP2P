const models = require('../models');


//------------------ Anuncios ------------------//

module.exports.crearAnuncioVenta = async (req, res) => {

    try {
        const { id_billetera, id_usuario, id_moneda, tipo_anuncio, monto } = req.body;

        // Validar que la billetera exista
        const billetera = await models.Billetera.findByPk(id_billetera);
        if (!billetera) {
            return res.status(404).json({ message: "Billetera no encontrada" });
        }
        // Validar que el usuario exista
        const usuario = await models.Usuario.findByPk(id_usuario);
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        // Validar que la moneda exista
        const moneda = await models.Moneda.findByPk(id_moneda);
        if (!moneda) {
            return res.status(404).json({ message: "Moneda no encontrada" });

    
        }



        const nuevoAnuncio = await models.Anuncio.create({
            id_billetera,
            id_usuario,
            id_moneda,
            tipo_anuncio : "venta", 
            monto,
            fecha_anuncio: new Date(),
            
        });

        res.status(201).json(nuevoAnuncio);
    } catch (error) {
        console.error("Error al crear el anuncio:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}



module.exports.crearAnuncioCompra = async (req, res) => {
    try {
        const { id_billetera, id_usuario, id_moneda, tipo_anuncio, monto } = req.body;

        // Validar que la billetera exista
        const billetera = await models.Billetera.findByPk(id_billetera);
        if (!billetera) {
            return res.status(404).json({ message: "Billetera no encontrada" });
        }
        // Validar que el usuario exista
        const usuario = await models.Usuario.findByPk(id_usuario);
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        // Validar que la moneda exista
        const moneda = await models.Moneda.findByPk(id_moneda);
        if (!moneda) {
            return res.status(404).json({ message: "Moneda no encontrada" });
        }

        const nuevoAnuncio = await models.Anuncio.create({
            id_billetera,
            id_usuario,
            id_moneda,
            tipo_anuncio : "compra", 
            monto,
            fecha_anuncio: new Date(),
            
        });

        res.status(201).json(nuevoAnuncio);
    } catch (error) {
        console.error("Error al crear el anuncio:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

module.exports.traerAnunciosVentaMenoElPropio = async (req, res) => {
    try {
        const { id_usuario } = req.params;

        // Traer anuncios de venta que no sean del usuario
        const anuncios = await models.Anuncio.findAll({
            where: {
                tipo_anuncio: "venta",
                id_usuario: { [models.Sequelize.Op.ne]: id_usuario }
            },
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

        res.json({ anuncios });
    } catch (error) {
        console.error("Error al obtener los anuncios de venta:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

module.exports.traerAnunciosCompraMenosElPropio = async (req, res) => {
    try {
        const { id_usuario } = req.params;

        // Traer anuncios de compra que no sean del usuario
        const anuncios = await models.Anuncio.findAll({
            where: {
                tipo_anuncio: "compra",
                id_usuario: { [models.Sequelize.Op.ne]: id_usuario }
            },
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

        res.json({ anuncios });
    } catch (error) {
        console.error("Error al obtener los anuncios de compra:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

module.exports.traerTodosLosAnuncios = async (req, res) => {
    try {
        // Traer todos los anuncios
        const anuncios = await models.Anuncio.findAll({
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

        res.json({ anuncios });
    } catch (error) {
        console.error("Error al obtener los anuncios:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}