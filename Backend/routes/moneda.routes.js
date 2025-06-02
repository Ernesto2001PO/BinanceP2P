const { requireUser } = require("../middleware/requires-user");


module.exports = (app) => {
    const router = require("express").Router();
    const monedaController = require("../controllers/moneda.controller");

    // Rutas para manejar monedas
    router.post("/crear", requireUser, monedaController.crearMoneda);
    router.get("/obtener", requireUser, monedaController.obtenerMonedas);
    router.get("/obtener/:id_moneda", requireUser, monedaController.obtenerMonedaPorId);
    router.put("/actualizar/:id_moneda", requireUser, monedaController.actualizarMoneda);
    router.delete("/eliminar/:id_moneda", requireUser, monedaController.eliminarMoneda);

    app.use("/api/moneda", router);
}