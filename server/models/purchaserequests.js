'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PurchaseRequests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PurchaseRequests.init({
    requestNo: DataTypes.STRING,
    ItemId: DataTypes.INTEGER,
    qtyRequest: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    linkPRS: DataTypes.STRING,
    AssigneeId: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PurchaseRequests',
  });
  return PurchaseRequests;
};