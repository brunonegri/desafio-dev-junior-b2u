'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cars', 
     [
      {
        carModel: 'Marea Turbo',
        brand: 'admin@admin.com',
        year: 1998,
        description: 'Carro bom',
        ownerId: 1
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('cars', null, {});
  }
};
