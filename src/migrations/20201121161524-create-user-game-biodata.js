module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserGameBiodata', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      addres: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['m', 'f'],
        allowNull: true,
      },
      age: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('UserGameBiodata');
  },
};
