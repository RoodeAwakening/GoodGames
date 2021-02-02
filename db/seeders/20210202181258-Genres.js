'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Genres', [
        {name: 'Adventure'},
        {name: 'Action RPG'},
        {name: 'Simulation'},
        {name: 'Survival'},
        {name: 'Open World'},
        {name: 'RPG'},
        {name: 'Strategy'},
        {name: 'Horror'},
        {name: 'VR'},
        {name: 'Action'},
        {name: 'FPS'},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Genres', null, {});
  }
};
