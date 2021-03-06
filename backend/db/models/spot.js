'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    image3: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, {foreignKey: 'userId'})
    Spot.hasMany(models.Review, {foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true})
  };
  return Spot;
};
