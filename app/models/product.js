'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: "id_user",
      });
      this.belongsToMany(models.cart, {
        through: models.cart_product,
        foreignKey: "id_product",
      });

      this.hasMany(models.order_item, {
        foreignKey: 'id_product',
      });

      this.hasMany(models.wishlist, {
        foreignKey: 'id_product',
      });

      this.hasMany(models.review, {
        foreignKey: 'id_product',
      });
    }
  }
  product.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    sold: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    category: DataTypes.ENUM('clothing','accessories','culinary','souvenirs'),
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};