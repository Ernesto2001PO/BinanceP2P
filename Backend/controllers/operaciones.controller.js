const models = require('../models');


//------------------ Anuncios ------------------//

module.exports.crearAnuncioVenta = async (req, res) => {

    try {
        const { id_billetera, id_usuario, id_moneda, tipo_anuncio, monto } = req.body;

        const billetera = await models.Billetera.findByPk(id_billetera);
        if (!billetera) {
            return res.status(404).json({ message: "Billetera no encontrada" });
        }
        const usuario = await models.Usuario.findByPk(id_usuario);
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        const moneda = await models.Moneda.findByPk(id_moneda);
        if (!moneda) {
            return res.status(404).json({ message: "Moneda no encontrada" });


        }



        const nuevoAnuncio = await models.Anuncio.create({
            id_billetera,
            id_usuario,
            id_moneda,
            tipo_anuncio: "venta",
            monto,
            descripcion,
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
            tipo_anuncio: "compra",
            monto,
            fecha_anuncio: new Date(),

        });

        res.status(201).json(nuevoAnuncio);
    } catch (error) {
        console.error("Error al crear el anuncio:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

module.exports.crearAnuncio = async (req, res) => {
    try {
        const { id_billetera, id_usuario, id_moneda, tipo_anuncio, monto, descripcion } = req.body;
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
            tipo_anuncio,
            monto,
            descripcion,
            fecha_anuncio: new Date(),
        });

        res.status(201).json(nuevoAnuncio);
    } catch (error) {
        console.error("Error al crear el anuncio:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

module.exports.traerAnunciosVentaMenosElPropio = async (req, res) => {
    try {
        const { id_usuario } = req.params;

        const anuncios = await models.Anuncio.findAll({
            where: {
                tipo_anuncio: "venta",
                id_usuario: { [models.Sequelize.Op.ne]: id_usuario }
            },
            attributes: ['id_anuncio', 'tipo_anuncio', 'monto', 'descripcion', 'fecha_anuncio'],
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
            attributes: ['id_anuncio', 'tipo_anuncio', 'monto', 'descripcion', 'fecha_anuncio'],
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

module.exports.hacerTransferencia = async (req, res) => {
    try {
        const { id_billetera_origen, id_billetera_destino, monto } = req.body;

        // Validar que las billeteras existan
        const billeteraOrigen = await models.Billetera.findByPk(id_billetera_origen);
        if (!billeteraOrigen) {
            return res.status(404).json({ message: "Billetera de origen no encontrada" });
        }
        const billeteraDestino = await models.Billetera.findByPk(id_billetera_destino);
        if (!billeteraDestino) {
            return res.status(404).json({ message: "Billetera de destino no encontrada" });
        }

        // Verificar saldo suficiente
        if (parseFloat(billeteraOrigen.saldo) < parseFloat(monto)) {
            return res.status(400).json({ message: "Saldo insuficiente en la billetera de origen" });
        }

        // Realizar la transferencia
        await models.Billetera.update(
            { saldo: models.Sequelize.literal(`saldo - ${monto}`) },
            { where: { id_billetera: id_billetera_origen } }
        );
        await models.Billetera.update(
            { saldo: models.Sequelize.literal(`saldo + ${monto}`) },
            { where: { id_billetera: id_billetera_destino } }
        );

        // Crear el registro de la transferencia
        await models.Transferencia.create({
            id_origen: id_billetera_origen,
            id_destino: id_billetera_destino,
            monto_origen: monto,
            fecha: new Date()
        });

        res.status(200).json({ message: "Transferencia realizada con éxito" });
    } catch (error) {
        console.error("Error al realizar la transferencia:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

module.exports.obtenerTransferenciasPorBilletera = async (req, res) => {
    try {
        const { id_billetera } = req.params;

        const transferencias = await models.Transferencia.findAll({
            where: {
                [models.Sequelize.Op.or]: [
                    { id_origen: id_billetera },
                    { id_destino: id_billetera }
                ]
            },
            include: [
                {
                    model: models.Billetera,
                    as: 'origen',
                    attributes: ['id_billetera', 'id_usuario']
                },
                {
                    model: models.Billetera,
                    as: 'destino',
                    attributes: ['id_billetera', 'id_usuario']
                },
            ]
        });

        res.json({ transferencias });
    } catch (error) {
        console.error("Error al obtener las transferencias:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}
