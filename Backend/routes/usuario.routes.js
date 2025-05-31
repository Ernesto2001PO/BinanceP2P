module.exports = (app) => {
    const usuarioController = require("../controllers/usuario.controller.js");
    const router = require("express").Router();   


    router.post("/crear_usuario", usuarioController.crearUsuario);
    router.get("/obtener_usuarios", usuarioController.obtenerUsuarios);
    router.post("/login", usuarioController.login);
    router.put("/hacer_admin/:id_usuario", usuarioController.hacerAdmin);

    app.use("/api/usuario", router);
}