const { DataTypes } = require('sequelize');


module.exports = function (sequelize) {
    const Transaccion = sequelize.define(
        'Transacciones',
        {
            id_transaccion: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            monto: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id_billetera_origen: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_billetera_destino: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            fecha_transaccion: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: 'transacciones',
            timestamps: false,
        }
    );

    return Transaccion;
}
