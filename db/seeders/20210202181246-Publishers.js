'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Publishers', [
        {name: 'Coffee Stain Publishing'},
        {name: 'Electronic Arts'},
        {name: 'Gamera Game'},
        {name: 'Facepunch Studios'},
        {name: 'Cd Projekt Red'},
        {name: 'Xbox Game Studios'},
        {name: 'Larian Studios'},
        {name: '2K'},
        {name: 'Kinetic Games'},
        {name: 'ConcernedApe'},
        {name: 'Axolot Games'},
        {name: 'Ndemic Creations'},
        {name: 'Omocat'},
        {name: 'Studio Wildcard'},
        {name: 'Bohemia Interactive'},
        {name: 'Beat Games'},
        {name: 'Rockstar Games'},
        {name: 'Activision'},
        {name: 'Microsoft'},
        {name: 'Bungie'},
      ], {});
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Publishers', null, {});
  }
};
