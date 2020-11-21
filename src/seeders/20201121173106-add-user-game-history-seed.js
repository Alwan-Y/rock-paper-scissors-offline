'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('UserGameHistory', [
        {
          id: '68b9212c-b617-4748-a027-b48b08227a71',
          username: 'alwan',
          playerChoice: 'rock',
          computerChoice: 'paper',
          result: 'WINNER',
          userGameId: '71b6e88f-3adb-433b-9566-ed5097438742'
        },{
          id: '29c6ab2b-e9f7-40ca-8f60-32503636309a',
          username: 'yusuf',
          playerChoice: 'paper',
          computerChoice: 'paper',
          result: 'DRAW',
          userGameId: '115c9c91-5d7a-4324-a1be-e47d681f9757'
        },{
          id: 'bf6bc586-7780-4a2e-aadc-84cefe8f18ff',
          username: 'nyxz',
          playerChoice: 'paper',
          computerChoice: 'scissor',
          result: 'LOSSER',
          userGameId: '3074c4b8-63db-4297-8189-57bfa1beac96'
        }

      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserGameHistory', null, {});
  }
};
