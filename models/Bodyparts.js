const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bodyparts extends Model {}

Bodyparts.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
        image:{
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bodyparts',
      }
    );
    
    module.exports = Bodyparts;