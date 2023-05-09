'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
      username: 'John Doe',
      email: 'johndoes@gmail.com',
      password: '123456',
      role: 'customer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: 'janedoe12',
      role: 'seller',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  }
};
