'use strict';

const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Iluha NePadai Duhom',
        email: 'greenfroggy@list.ru',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mityai Razdolbai',
        email: 'mityansk@list.ru',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mishka Senior Pomidor',
        email: 'bezpomidorok@list.ru',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
