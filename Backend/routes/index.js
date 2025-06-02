module.exports = app => {
    require("../routes/usuario.routes")(app);
    require("../routes/billetera.routes")(app);
    require("../routes/moneda.routes")(app);
    require("../routes/operaciones.routes")(app);

}