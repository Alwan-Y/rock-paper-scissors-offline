const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    static associate(models) {
      const { UserGame } = models

      UserGameHistory.belongsTo(UserGame, {foreignKey: 'id'} )
    }
  };
  UserGameHistory.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: DataTypes.STRING,
    playerChoice: DataTypes.STRING,
    computerChoice: DataTypes.STRING,
    result: DataTypes.STRING,
    userGameId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UserGameHistory',
    timestamps: false
  })
  return UserGameHistory;
};