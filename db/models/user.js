'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
  username: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING(20)
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  email: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  hashedPassword: {
    allowNull: false,
    type: DataTypes.STRING.BINARY
  }, }, {});
  User.associate = function(models) {
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Rating, { foreignKey: "userId" });
    User.hasMany(models.GameStatus, { foreignKey: "userId" });

    const columnMapping = {
      through: "GameStatus",
      otherKey: "gameId",
      foreignKey: "userId"
    }

    User.belongsToMany(models.Game, columnMapping);
  };
  return User;
};
