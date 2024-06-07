const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/index');

class Requests extends Model {};

Requests.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        powerLevel: {
            type: DataTypes.STRING(1),
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'request',
    }
);

module.exports = Requests;