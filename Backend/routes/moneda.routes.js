module.exports = (app) => {
    const router = require("express").Router();
    const monedaController = require("../controllers/moneda.controller");

    // Rutas para manejar monedas
    router.post("/crear", monedaController.crearMoneda);
    router.get("/obtener", monedaController.obtenerMonedas);
    router.get("/obtener/:id_moneda", monedaController.obtenerMonedaPorId);
    router.put("/actualizar/:id_moneda", monedaController.actualizarMoneda);
    router.delete("/eliminar/:id_moneda", monedaController.eliminarMoneda);

    app.use("/api/moneda", router);
}