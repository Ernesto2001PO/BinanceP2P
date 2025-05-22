const { sequelize } = require("../config/db.config");

const Usuario = require("./usuario")(sequelize);
const Token = require("./token")(sequelize);

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
    sequelize,
    Sequelize: sequelize.Sequelize
};