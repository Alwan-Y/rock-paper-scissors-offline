const { Model } = require('sequelize') 
module.exports = (sequelize, DataTypes) => {
  class AdminGame extends Model {
    static associate(models) {
    }
  }
  AdminGame.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdminGame',
    timestamps: false
  });
  return AdminGame;
};