'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameStatus = sequelize.define('GameStatus', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    gameId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM(['toPlay', 'playing', 'played'])
    },
  }, {});
  GameStatus.associate = function(models) {
    GameStatus.belongsTo(models.User, { foreignKey: "userId" });
    GameStatus.belongsTo(models.Game, { foreignKey: "gameId" });
  };
  return GameStatus;
};
