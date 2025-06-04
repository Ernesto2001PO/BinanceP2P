const { requireUser } = require("../middleware/requires-user");



module.exports = (app) => {
    const router = require("express").Router();
    const operacionesController = require("../controllers/operaciones.controller");

    router.post("/anuncio-venta", requireUser, operacionesController.crearAnuncioVenta);
    router.post("/anuncio-compra", requireUser, operacionesController.crearAnuncioCompra);
    router.get("/anuncios-venta", operacionesController.traerTodosLosAnuncios);
    router.get("/anuncios-venta/:id_usuario", requireUser, operacionesController.traerAnunciosVentaMenoElPropio);
    router.get("/anuncios-compra/:id_usuario", requireUser, operacionesController.traerAnunciosCompraMenosElPropio);

    app.use("/api/operaciones", router);
}