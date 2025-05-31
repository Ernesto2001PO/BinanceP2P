const { sequelize } = require("../config/db.config");

const Usuario = require("./usuario")(sequelize);
const Token = require("./token")(sequelize);
const Anuncio = require("./anuncio")(sequelize);
const Billetera = require("./billetera")(sequelize);
const Transaccion = require("./transaccion")(sequelize);
const Moneda = require("./moneda")(sequelize);
const Transferencia = require("./Transferencia")(sequelize);

// Definir relaciones aquí
Usuario.hasMany(Token, {
    foreignKey: 'usuario_id',
    sourceKey: 'id'
});
Token.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    targetKey: 'id'
});

module.exports = {
    Usuario,
    Token,
    Anuncio,
    Billetera,
    Transaccion,
    Moneda,
    Transferencia,
    sequelize,
    Sequelize: sequelize.Sequelize
};