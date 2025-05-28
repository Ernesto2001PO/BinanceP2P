const { requireUser } = require("../middleware/requires-user");

module.exports = (app) => {
    const router = require("express").Router();
    const billeteraController = require("../controllers/billetera.controller");

    router.post("/crear", billeteraController.crearBilletera);
    router.get("/usuario/:id_usuario", requireUser, billeteraController.obtenerBilleterasPorUsuario);
    router.get("/moneda/:id_moneda", requireUser, billeteraController.obtenerBillteraPorMoneda);
    router.get("/:id_billetera", requireUser, billeteraController.obtenerBilleteraPorId);
    router.put("/:id_billetera", billeteraController.actualizarBilletera);
    router.delete("/:id_billetera", billeteraController.eliminarBilletera);

    app.use("/api/billetera", router);
};