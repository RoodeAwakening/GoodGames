'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    publisherId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Publishers" }
    },
    consoleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Consoles" }
    },
    genreId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Genres" }
    },
    maxPlayers: {
      allowNull: false,
      type: DataTypes.NUMERIC
    },
    rating: {
      allowNull: false,
      type: DataTypes.NUMERIC
    }
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};
