module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('AdminGame', [{
        id: 'f7b6d57d-85f4-400d-b8a0-fb66d36d889c',
        username: 'superadmin',
        password: 'superadmin'
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AdminGame', null, {});
  }
};
