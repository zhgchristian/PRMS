'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PurchaseRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requestNo: {
        type: Sequelize.STRING
      },
      ItemId: {
        type: Sequelize.INTEGER
      },
      qtyRequest: {
        type: Sequelize.INTEGER
      },
      unit: {
        type: Sequelize.STRING
      },
      linkPRS: {
        type: Sequelize.STRING
      },
      AssigneeId: {
        type: Sequelize.INTEGER
      },
      CompanyId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PurchaseRequests');
  }
};