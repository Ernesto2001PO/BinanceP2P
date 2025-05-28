module.exports = (app) => {
    const router = require("express").Router();
    const monedaController = require("../controllers/moneda.controller");

    // Rutas para manejar monedas
    router.post("/crear", monedaController.crearMoneda);
    router.get("/obtener", monedaController.obtenerMonedas);
    router.get("/obtener/:id_moneda", monedaController.obtenerMonedaPorId);

    app.use("/api/moneda", router);
}