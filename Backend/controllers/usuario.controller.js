const models = require("../models");
const TOKEN = require("../utils/token");
exports.crearUsuario = async (req, res) => {
    try {
        const { nombre, email, password_hash, rol } = req.body;

        const usuarioExistente = await models.Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        const hashedpassword = TOKEN.generarPassword(password_hash);

        console.log("usuario verficado");


        // Crear el nuevo usuario
        const nuevoUsuario = await models.Usuario.create({
            nombre,
            email,
            password_hash: hashedpassword,
            rol: "usuario",
        });

        res.send({
            message: "Usuario creado exitosamente",
            usuario: {
                id: nuevoUsuario.id,
                nombre: nuevoUsuario.nombre,
                email: nuevoUsuario.email,
                rol: nuevoUsuario.rol,
                fecha_creacion: nuevoUsuario.fecha_creacion,
            },
        });



    } catch (error) {
        console.error("Error al crear el usuario:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await models.Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email y contraseña son requeridos" });
        }

        const usuario = await models.Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }
        const hashedpassword = TOKEN.generarPassword(password);

        if (usuario.password_hash !== hashedpassword) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const token = await models.Token.create({
            usuario_id: usuario.id,
            token: TOKEN.generarToken(usuario),
        });
        if (!token) {
            return res.status(500).json({ message: "Error al generar el token" });
        }
        res.send({
            message: "Inicio de sesión exitoso",
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol,
                token: token.token,
                fecha_creacion: usuario.fecha_creacion,
            },
        });

    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}