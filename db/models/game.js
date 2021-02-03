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
    Game.hasMany(models.Comment, { foreignKey: "gameId" });
    Game.hasMany(models.Rating, { foreignKey: "gameId" });
    Game.hasMany(models.GameStatus, { foreignKey: "gameId" });

    Game.belongsTo(models.Publisher, { foreignKey: "publisherId" });
    Game.belongsTo(models.Console, { foreignKey: "consoleId" });
    Game.belongsTo(models.Genre, { foreignKey: "genreId" });

    const columnMapping = {
      through: "GameStatus",
      otherKey: "userId",
      foreignKey: "gameId"
    }

    Game.belongsToMany(models.User, columnMapping);
  };
  return Game;
};
