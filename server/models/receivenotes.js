'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReceiveNotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReceiveNotes.init({
    PurchaseId: DataTypes.STRING,
    receiveNo: DataTypes.STRING,
    qtyReceive: DataTypes.INTEGER,
    linkGRN: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ReceiveNotes',
  });
  return ReceiveNotes;
};