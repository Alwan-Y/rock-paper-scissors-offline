module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserGameBiodata', [
      {
        id: '6396ac12-098f-42f4-a00a-31a96df36f56',
        fullname: 'alwan yusuf',
        addres: 'ditinggal',
        gender: 'm',
        age: '19',
        userGameId: '71b6e88f-3adb-433b-9566-ed5097438742'
      }, {
        id: '92a51b58-ff52-462e-a255-dee4a61ba0fa',
        fullname: 'phnyxz',
        addres: 'ditinggal juga',
        gender: 'f',
        age: '19',
        userGameId: '3074c4b8-63db-4297-8189-57bfa1beac96'
      },{
        id: 'ed58b30b-91e1-465d-87ea-da57084f0e29',
        fullname: 'yusuf alwan',
        addres: 'ditinggal',
        gender: 'm',
        age: '19',
        userGameId: '3074c4b8-63db-4297-8189-57bfa1beac96'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserGameBiodata', null, {});
  }
};
