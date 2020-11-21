module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('UserGame', [
        {
          id: '71b6e88f-3adb-433b-9566-ed5097438742',
          username: 'alwan',
          password: 'alwan'
        }, {
          id: '115c9c91-5d7a-4324-a1be-e47d681f9757',
          username: 'yusuf',
          password: 'yusuf'
        },{
          id: '3074c4b8-63db-4297-8189-57bfa1beac96',
          username: 'nyxz',
          password: 'nyxz'
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserGame', null, {});
  }
};
