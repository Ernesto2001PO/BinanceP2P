module.exports = (app) => {
    const router = require("express").Router();
    const monedaController = require("../controllers/moneda.controller");

    // Rutas para manejar monedas
    router.post("/crear", monedaController.crearMoneda);
  
    app.use("/api/moneda", router);
}