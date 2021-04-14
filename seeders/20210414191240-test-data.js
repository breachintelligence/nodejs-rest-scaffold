'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Brands', [
      {
        id: uuidv4(),
        name: 'Vizio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Samsung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Panasonic',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    const brands = await queryInterface.sequelize.query(`SELECT id FROM Brands;`);
    const brandRows = brands[0];
    return await queryInterface.bulkInsert('Widgets', [
      {
        id: uuidv4(),
        brandId: brandRows[0].id,
        name: 'Soundbar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        brandId: brandRows[1].id,
        name: 'TV',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        brandId: brandRows[2].id,
        name: 'Toaster Oven',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Widgets', null, {});
    return queryInterface.bulkDelete('Brands', null, {});
  }
};
