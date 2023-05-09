'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.orders, {
        foreignKey: 'id_order',
      });

      this.belongsTo(models.product, {
        foreignKey: 'id_product',
      });
    }
  }
  order_item.init({
    quantity: DataTypes.STRING,
    price: DataTypes.FLOAT,
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_item',
  });
  return order_item;
};