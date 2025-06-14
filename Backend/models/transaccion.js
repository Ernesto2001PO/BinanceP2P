const { DataTypes } = require('sequelize');




module.exports = function (sequelize) {
    const Transaccion = sequelize.define(
        'Transaccion',
        {
            id_transaccion: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_anuncio: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_comprador: { // el que inicia la compra
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_vendedor: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            monto: {
                type: DataTypes.DECIMAL(18, 6),
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING, // pendiente, pagado, verificado, cancelado
                allowNull: false,
            },
            comprobante_pago: {
                type: DataTypes.STRING, // URL de imagen o texto
                allowNull: true,
            },
            fecha: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: 'transaccion',
            timestamps: false,
        }
    );

    return Transaccion;
}
