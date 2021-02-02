'use strict';
module.exports = (sequelize, DataTypes) => {
  const Console = sequelize.define('Console', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    }
  }, {});
  Console.associate = function(models) {
    // associations can be defined here
  };
  return Console;
};
