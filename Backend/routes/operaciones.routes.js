const { requireUser } = require("../middleware/requires-user");



module.exports = (app) => {
    const router = require("express").Router();
    const operacionesController = require("../controllers/operaciones.controller");

    router.post("/anuncio-venta", requireUser, operacionesController.crearAnuncioVenta);
    router.get("/anuncios-venta", operacionesController.traerTodosLosAnuncios);
    router.get("/anuncios-venta/:id_usuario", requireUser, operacionesController.traerAnunciosVentaMenoElPropio);

    app.use("/api/operaciones", router);
}