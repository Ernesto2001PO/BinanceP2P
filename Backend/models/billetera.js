const { DataTypes } = require('sequelize');



module.exports = function (sequelize) {
    const Billetera = sequelize.define(
        'Billetera',
        {
            id_billetera: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            saldo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id_usuario: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id_moneda: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'billetera',
            timestamps: false,
        }
    );

    return Billetera;
}