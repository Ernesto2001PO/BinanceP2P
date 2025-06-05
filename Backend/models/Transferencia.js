const { DataTypes } = require('sequelize');


module.exports = function (sequelize) {
    const Transferencia = sequelize.define(
        'Transferencia',
        {
            id_transferencia: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_origen: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_destino: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            monto_origen: {
                type: DataTypes.DECIMAL(18, 6),
                allowNull: false,
            },
            fecha: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: 'transferencia',
            timestamps: false,
        }
    );

    return Transferencia;
}
