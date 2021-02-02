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
        type: Sequelize.INTEGER,
        references: { model: "Publishers" }
      },
      consoleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Consoles" }
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Genres" }
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
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};
