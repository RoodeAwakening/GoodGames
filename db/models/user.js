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
    // associations can be defined here
  };
  return User;
};