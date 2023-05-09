'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.review, {
        foreignKey: 'id_user',
      });

      this.hasMany(models.orders, {
        foreignKey: 'id_user',
      });

      this.hasMany(models.wishlist, {
        foreignKey: 'id_user',
      });

      this.hasMany(models.cart, {
        foreignKey: 'id_user',
      });

      this.hasMany(models.product, {
        foreignKey: 'id_user',
      });

      this.hasMany(models.shipment, {
        foreignKey: 'id_user',
      });

    }
  }
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('seller', 'customer'),
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};