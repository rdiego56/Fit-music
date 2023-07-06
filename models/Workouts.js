const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Workouts extends Model {}

Workouts.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
        },
        sets:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reps:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bodyparts_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'bodyparts',
                key: 'id',
            },
        },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'workout',
    }
  );
  
  module.exports = Workouts;
        
    
