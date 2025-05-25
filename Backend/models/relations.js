const models = require('.');

// Definir relaciones usando los modelos ya inicializados
models.Usuario.hasMany(models.Token, {
    foreignKey: 'usuario_id',
    sourceKey: 'id'
});
// Un token pertenece a un usuario
models.Token.belongsTo(models.Usuario, {
    foreignKey: 'usuario_id',
    targetKey: 'id'
});


// Una billetera pertenece a un usuario
models.Billetera.belongsTo(models.Usuario, {
    foreignKey: 'id_usuario',
    targetKey: 'id'
});

// Un usuario puede tener muchas billeteras
models.Usuario.hasMany(models.Billetera, {
    foreignKey: 'id_usuario',
    sourceKey: 'id'
});

// Una billetera pertenece a una moneda
models.Billetera.belongsTo(models.Moneda, {
    foreignKey: 'id_moneda',
    targetKey: 'id_moneda'
});

// Una moneda puede tener muchas billeteras
models.Moneda.hasMany(models.Billetera, {
    foreignKey: 'id_moneda',
    sourceKey: 'id_moneda'
});


// Un usuario puede tener muchos anuncios
models.Usuario.hasMany(models.Anuncio, {
    foreignKey: 'id_usuario',
    sourceKey: 'id'
});

// Un anuncio pertenece a un usuario
models.Anuncio.belongsTo(models.Usuario, {
    foreignKey: 'id_usuario',
    targetKey: 'id'
});

// Una moneda puede tener varios anuncios
models.Moneda.hasMany(models.Anuncio, {
    foreignKey: 'id_moneda',
    sourceKey: 'id_moneda'
});

// Un anuncio pertenece a una moneda
models.Anuncio.belongsTo(models.Moneda, {
    foreignKey: 'id_moneda',
    targetKey: 'id_moneda'
});

// Un anuncio puede tener muchas transacciones
models.Anuncio.hasMany(models.Transacciones, {
    foreignKey: 'id_anuncio',
    sourceKey: 'id_anuncio'
});


// Una transacción pertenece a un anuncio
models.Transacciones.belongsTo(models.Anuncio, {
    foreignKey: 'id_anuncio',
    targetKey: 'id_anuncio'
});

// Una transacción pertenece a una billetera de origen
models.Transacciones.belongsTo(models.Billetera, {
    foreignKey: 'billetera_origen_id',
    targetKey: 'id_billetera',
    as: 'billeteraOrigen'
});

// Una transacción pertenece a una billetera de destino
models.Transacciones.belongsTo(models.Billetera, {
    foreignKey: 'billetera_destino_id',
    targetKey: 'id_billetera',
    as: 'billeteraDestino'
});

// Una billetera puede tener muchas transacciones como origen
models.Billetera.hasMany(models.Transacciones, {
    foreignKey: 'billetera_origen_id',
    sourceKey: 'id_billetera',
    as: 'transaccionesEnviadas'
});

// Una billetera puede tener muchas transacciones como destino
models.Billetera.hasMany(models.Transacciones, {
    foreignKey: 'billetera_destino_id',
    sourceKey: 'id_billetera',
    as: 'transaccionesRecibidas'
});
