"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.shipment, {
        foreignKey: "id_shipment",
      });

      this.belongsTo(models.user, {
        foreignKey: "id_user",
      });

      this.hasMany(models.order_item, {
        foreignKey: 'id_order',
      });
    }
  }
  orders.init(
    {
      order_date: DataTypes.DATE,
      total_price: DataTypes.FLOAT,
      payment: DataTypes.ENUM('BNI','BCA'),
      id_user: DataTypes.INTEGER,
      id_shipment: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orders",
    }
  );
  return orders;
};
