'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ratings', [
      {userId: 1, gameId: 1, yesOrNoVote: true},
      {userId: 1, gameId: 2, yesOrNoVote: true},
      {userId: 1, gameId: 3, yesOrNoVote: true},
      {userId: 1, gameId: 4, yesOrNoVote: true},
      {userId: 1, gameId: 5, yesOrNoVote: false},
      {userId: 1, gameId: 6, yesOrNoVote: false},
      {userId: 1, gameId: 7, yesOrNoVote: false},
      {userId: 1, gameId: 8, yesOrNoVote: false},
      {userId: 1, gameId: 9, yesOrNoVote: true},
      {userId: 1, gameId: 10, yesOrNoVote: true},
      {userId: 2, gameId: 1, yesOrNoVote: true},
      {userId: 2, gameId: 2, yesOrNoVote: false},
      {userId: 2, gameId: 3, yesOrNoVote: false},
      {userId: 2, gameId: 4, yesOrNoVote: false},
      {userId: 2, gameId: 5, yesOrNoVote: false},
      {userId: 2, gameId: 6, yesOrNoVote: false},
      {userId: 2, gameId: 7, yesOrNoVote: true},
      {userId: 2, gameId: 8, yesOrNoVote: true},
      {userId: 2, gameId: 9, yesOrNoVote: true},
      {userId: 2, gameId: 10, yesOrNoVote: true},
      {userId: 3, gameId: 1, yesOrNoVote: true},
      {userId: 3, gameId: 2, yesOrNoVote: true},
      {userId: 3, gameId: 3, yesOrNoVote: true},
      {userId: 3, gameId: 4, yesOrNoVote: true},
      {userId: 3, gameId: 5, yesOrNoVote: true},
      {userId: 3, gameId: 6, yesOrNoVote: false},
      {userId: 3, gameId: 7, yesOrNoVote: false},
      {userId: 3, gameId: 8, yesOrNoVote: false},
      {userId: 3, gameId: 9, yesOrNoVote: false},
      {userId: 3, gameId: 10, yesOrNoVote: false},
      {userId: 4, gameId: 1, yesOrNoVote: false},
      {userId: 4, gameId: 2, yesOrNoVote: false},
      {userId: 4, gameId: 3, yesOrNoVote: false},
      {userId: 4, gameId: 4, yesOrNoVote: false},
      {userId: 4, gameId: 5, yesOrNoVote: true},
      {userId: 4, gameId: 6, yesOrNoVote: true},
      {userId: 4, gameId: 7, yesOrNoVote: true},
      {userId: 4, gameId: 8, yesOrNoVote: true},
      {userId: 4, gameId: 9, yesOrNoVote: true},
      {userId: 4, gameId: 10, yesOrNoVote: true}
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Ratings', null, {})
  }
};
