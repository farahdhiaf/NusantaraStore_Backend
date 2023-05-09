"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product, {
        foreignKey: "id_product",
      });

      this.belongsTo(models.user, {
        foreignKey: "id_user",
      });
    }
  }
  wishlist.init(
    {
      id_user: DataTypes.INTEGER,
      id_product: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "wishlist",
    }
  );
  return wishlist;
};
