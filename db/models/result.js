'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    static associate(models) {
      this.belongsTo(models.User,{foreignKey:'user_id'})
    }
  }
  Result.init({
    time_of_game: DataTypes.INTEGER,
    count_of_dead_enemy: DataTypes.INTEGER,
    count_of_game: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
   
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};