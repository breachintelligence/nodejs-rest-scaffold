'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Widgets', 'brandId', {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: 'Brands',
        key: 'id'
      },
      allowNull: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Widgets', 'brandId');
  }
};