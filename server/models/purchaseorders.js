'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PurchaseOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PurchaseOrders.init({
    RequestId: DataTypes.INTEGER,
    orderNo: DataTypes.STRING,
    linkPOR: DataTypes.STRING,
    paymentStatus: DataTypes.STRING,
    paymentDate: DataTypes.DATE,
    paymentRef: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PurchaseOrders',
  });
  return PurchaseOrders;
};