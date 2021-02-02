'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" }
    },
    gameId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Games" }
    },
    yesOrNoVote: {
      type: DataTypes.BOOLEAN
    },
  }, {});
  Rating.associate = function(models) {
    Rating.belongsTo(models.User, { foreignKey: "userId" });
    Rating.belongsTo(models.Game, { foreignKey: "gameId" });
  };
  return Rating;
};
