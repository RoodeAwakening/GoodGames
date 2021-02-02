'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    }
  }, {});
  Genre.associate = function(models) {
    Genre.hasMany(models.Game, { foreignKey: "genreId" });
  };
  return Genre;
};
