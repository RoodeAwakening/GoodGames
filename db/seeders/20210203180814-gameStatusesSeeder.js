'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GameStatuses', [
      { userId: 1, gameId: 1, status: "toPlay" },
      { userId: 1, gameId: 2, status: "toPlay" },
      { userId: 1, gameId: 3, status: "played" },
      { userId: 1, gameId: 4, status: "playing" },
      { userId: 1, gameId: 7, status: "playing" },
      { userId: 2, gameId: 5, status: "toPlay" },
      { userId: 2, gameId: 6, status: "playing" },
      { userId: 2, gameId: 7, status: "toPlay" },
      { userId: 2, gameId: 8, status: "playing" },
      { userId: 2, gameId: 1, status: "toPlay" },
      { userId: 3, gameId: 2, status: "playing" },
      { userId: 3, gameId: 3, status: "played" },
      { userId: 3, gameId: 4, status: "toPlay" },
      { userId: 3, gameId: 5, status: "played" },
      { userId: 3, gameId: 6, status: "playing" },
      { userId: 4, gameId: 7, status: "toPlay" },
      { userId: 5, gameId: 8, status: "played" },
      { userId: 5, gameId: 9, status: "toPlay" },
      { userId: 6, gameId: 10, status: "playing" },
      { userId: 7, gameId: 11, status: "played" },
      { userId: 8, gameId: 12, status: "toPlay" },
      { userId: 9, gameId: 13, status: "played" },
      { userId: 10, gameId: 14, status: "toPlay" }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GameStatuses', null, {});

  }
};
