const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/index');

class Heroes extends Model {};

Heroes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        heroName: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        powerLevel: {
            type: DataTypes.STRING(1),
            allowNull: false,
        },
        locationBase: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        travelSpeed: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        registeredBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        requestId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'request',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hero',
    }
);

module.exports = Heroes;
