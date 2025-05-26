module.exports = (app) => {
    const router = require("express").Router();
    const billeteraController = require("../controllers/billetera.controller");

    router.post("/crear", billeteraController.crearBilletera);
    router.get("/usuario/:id_usuario", billeteraController.obtenerBilleterasPorUsuario);
    router.get("/:id_billetera", billeteraController.obtenerBilleteraPorId);
    router.put("/:id_billetera", billeteraController.actualizarBilletera);

    app.use("/api/billetera", router);

}
