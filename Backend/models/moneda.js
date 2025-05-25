const { DataTypes } = require('sequelize');



module.exports = function (sequelize) {
    const Moneda = sequelize.define(
        'Moneda',
        {
            id_moneda: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            simbolo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        
        },
        {
            tableName: 'moneda',
            timestamps: false,
        }
    );

    return Moneda;
}
