const {Model, DataTypes} = require('sequelize');
const sequelize = require('');

class Powers extends Model {};

Powers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        powerName: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'powers',
    }
);

module.exports = Powers;