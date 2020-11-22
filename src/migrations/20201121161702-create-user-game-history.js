module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserGameHistory', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      playerChoice: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      computerChoice: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userGameId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'cascade',
        references: {
          model: 'UserGame',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserGameHistory');
  },
};
