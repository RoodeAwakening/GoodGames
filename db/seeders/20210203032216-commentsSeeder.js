'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {userId: 1, gameId: 1, comment: 'great game!'},
      {userId: 1, gameId: 2, comment: 'great game!'},
      {userId: 1, gameId: 3, comment: 'great game!'},
      {userId: 1, gameId: 4, comment: 'great game!'},
      {userId: 1, gameId: 5, comment: 'this game stinks!'},
      {userId: 1, gameId: 6, comment: 'this game stinks!'},
      {userId: 1, gameId: 7, comment: 'this game stinks!'},
      {userId: 1, gameId: 8, comment: 'this game stinks!'},
      {userId: 1, gameId: 9, comment: 'great game!'},
      {userId: 1, gameId: 10, comment: 'great game!'},
      {userId: 2, gameId: 1, comment: 'This is the best game I have ever played'},
      {userId: 2, gameId: 2, comment: 'I would rather read the dictionary!'},
      {userId: 2, gameId: 3, comment: 'I would rather read the dictionary!'},
      {userId: 2, gameId: 4, comment: 'I would rather read the dictionary!'},
      {userId: 2, gameId: 5, comment: 'I would rather read the dictionary!'},
      {userId: 2, gameId: 6, comment: 'I would rather read the dictionary!'},
      {userId: 2, gameId: 7, comment: 'This is the best game I have ever played'},
      {userId: 2, gameId: 8, comment: 'This is the best game I have ever played'},
      {userId: 2, gameId: 9, comment: 'This is the best game I have ever played'},
      {userId: 2, gameId: 10, comment: 'This is the best game I have ever played'},
      {userId: 3, gameId: 1, comment: 'Astounding'},
      {userId: 3, gameId: 2, comment: 'Astounding'},
      {userId: 3, gameId: 3, comment: 'Astounding'},
      {userId: 3, gameId: 4, comment: 'Astounding'},
      {userId: 3, gameId: 5, comment: 'Astounding'},
      {userId: 3, gameId: 6, comment: 'Not appropriate for young children. Disrespectful!'},
      {userId: 3, gameId: 7, comment: 'Not appropriate for young children. Disrespectful!'},
      {userId: 3, gameId: 8, comment: 'Not appropriate for young children. Disrespectful!'},
      {userId: 3, gameId: 9, comment: 'Not appropriate for young children. Disrespectful!'},
      {userId: 3, gameId: 10, comment: 'Not appropriate for young children. Disrespectful!'},
      {userId: 4, gameId: 1, comment: 'This game made me want to sell my console! Never AGAIN'},
      {userId: 4, gameId: 2, comment: 'This game made me want to sell my console! Never AGAIN'},
      {userId: 4, gameId: 3, comment: 'This game made me want to sell my console! Never AGAIN'},
      {userId: 4, gameId: 4, comment: 'This game made me want to sell my console! Never AGAIN'},
      {userId: 4, gameId: 5, comment: 'Marvelous design. I loved this game so much I played for 3 days straight!'},
      {userId: 4, gameId: 6, comment: 'Marvelous design. I loved this game so much I played for 3 days straight!'},
      {userId: 4, gameId: 7, comment: 'Marvelous design. I loved this game so much I played for 3 days straight!'},
      {userId: 4, gameId: 8, comment: 'Marvelous design. I loved this game so much I played for 3 days straight!'},
      {userId: 4, gameId: 9, comment: 'Marvelous design. I loved this game so much I played for 3 days straight!'},
      {userId: 4, gameId: 10, comment: 'Marvelous design. I loved this game so much I played for 3 days straight!'}
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
   return queryInterface.bulkDelete('Comments', null, {})
  }
};
