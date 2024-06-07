const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/index');

class Reviews extends Model {};

Reviews.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        heroRequestedId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'hero',
                key: 'id',
            },
        },
        jobRequestId: {
            type: DataTypes.STRING(500),
            allowNull: false,
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
        modelName: 'review',
    }
);

module.exports = Reviews;