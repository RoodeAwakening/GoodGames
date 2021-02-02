'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      publisherId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      consoleId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      maxPlayers: {
        allowNull: false,
        type: Sequelize.NUMERIC
      },
      rating: {
        allowNull: false,
        type: Sequelize.NUMERIC
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};
