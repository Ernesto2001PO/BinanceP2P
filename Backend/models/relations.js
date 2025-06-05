const models = require('.');

// =================== USUARIO ===================
models.Usuario.hasMany(models.Token, {
    foreignKey: 'usuario_id',
});
models.Token.belongsTo(models.Usuario, {
    foreignKey: 'usuario_id',
});

models.Usuario.hasMany(models.Billetera, {
    foreignKey: 'id_usuario',
});
models.Billetera.belongsTo(models.Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario'
});

models.Usuario.hasMany(models.Anuncio, {
    foreignKey: 'id_usuario',
    
});
models.Anuncio.belongsTo(models.Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario'
});


// =================== MONEDA ===================
models.Moneda.hasMany(models.Billetera, {
    foreignKey: 'id_moneda',
});
models.Billetera.belongsTo(models.Moneda, {
    foreignKey: 'id_moneda',
});

models.Moneda.hasMany(models.Anuncio, {
    foreignKey: 'id_moneda',
});
models.Anuncio.belongsTo(models.Moneda, {
    foreignKey: 'id_moneda',
});


// =================== ANUNCIOS & TRANSACCIONES ===================
models.Anuncio.hasMany(models.Transaccion, {
    foreignKey: 'id_anuncio',
});
models.Transaccion.belongsTo(models.Anuncio, {
    foreignKey: 'id_anuncio',
});

models.Usuario.hasMany(models.Transaccion, {
    foreignKey: 'id_comprador',
    as: 'compras'
});
models.Usuario.hasMany(models.Transaccion, {
    foreignKey: 'id_vendedor',
    as: 'ventas'
});
models.Transaccion.belongsTo(models.Usuario, {
    foreignKey: 'id_comprador',
    as: 'comprador'
});
models.Transaccion.belongsTo(models.Usuario, {
    foreignKey: 'id_vendedor',
    as: 'vendedor'
});


// =================== BILLETERAS & TRANSACCIONES ===================
models.Billetera.hasMany(models.Transaccion, {
    foreignKey: 'billetera_origen_id',
    as: 'transaccionesEnviadas'
});
models.Billetera.hasMany(models.Transaccion, {
    foreignKey: 'billetera_destino_id',
    as: 'transaccionesRecibidas'
});
models.Transaccion.belongsTo(models.Billetera, {
    foreignKey: 'billetera_origen_id',
    as: 'billeteraOrigen'
});
models.Transaccion.belongsTo(models.Billetera, {
    foreignKey: 'billetera_destino_id',
    as: 'billeteraDestino'
});

// =================== TRANSFERENCIAS ENTRE BILLETERAS ===================
models.Billetera.hasMany(models.Transferencia, {
    foreignKey: 'id_origen',
    as: 'transferenciasEnviadas'
});
models.Billetera.hasMany(models.Transferencia, {
    foreignKey: 'id_destino',
    as: 'transferenciasRecibidas'
});
models.Transferencia.belongsTo(models.Billetera, {
    foreignKey: 'id_origen',
    as: 'origen'
});
models.Transferencia.belongsTo(models.Billetera, {
    foreignKey: 'id_destino',
    as: 'destino'
});