const models = require('.');

// Definir relaciones usando los modelos ya inicializados
models.Usuario.hasMany(models.Token, {
    foreignKey: 'usuario_id',
    sourceKey: 'id'
});
models.Token.belongsTo(models.Usuario, {
    foreignKey: 'usuario_id',
    targetKey: 'id'
});