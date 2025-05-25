const { DataTypes } = require('sequelize');



module.exports = function (sequelize) {
    const Anuncio = sequelize.define(
        'Anuncio',
        {
            id_anuncio: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_usuario: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_moneda: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            tipo_anuncio: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            monto: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fecha_anuncio: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: 'anuncio',
            timestamps: false,
        }
    );
    return Anuncio;
}
