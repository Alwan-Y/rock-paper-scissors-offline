const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    static associate(models) {
      const { UserGameBiodata, UserGameHistory } = models

      UserGame.hasOne(UserGameBiodata, { foreignKey: 'id' })
      UserGame.hasMany(UserGameHistory, { foreignKey: 'id' })
    }
  }
  UserGame.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserGame',
    timestamps: false,
  })
  return UserGame;
};
