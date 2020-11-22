const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserGameBiodata extends Model {
    static associate(models) {
      const { UserGame } = models

      UserGameBiodata.belongsTo(UserGame, { foreignKey: 'id' })
    }
  }
  UserGameBiodata.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    fullname: DataTypes.STRING,
    addres: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['m', 'f'],
    },
    age: DataTypes.INTEGER,
    userGameId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'UserGameBiodata',
    timestamps: false,
  })
  return UserGameBiodata
};
