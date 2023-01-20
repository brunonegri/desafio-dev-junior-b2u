'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', 
     [
      {
        fullName: 'Admin',
        email: 'admin@admin.com',
        phoneNumber: '12 3456 7890',
        password: 'password',
        role: 'admin'
      }
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
