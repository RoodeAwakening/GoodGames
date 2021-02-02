'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Games" }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Game, { foreignKey: "gameId" });
  };
  return Comment;
};
