'use strict';

const { Result } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Result.bulkCreate([
      {
        time_of_game: 120,
        count_of_dead_enemy: 15,
        count_of_game: 5,
        user_id: 1,
      },
      {
        time_of_game: 90,
        count_of_dead_enemy: 10,
        count_of_game: 3,
        user_id: 2,
      },
      {
        time_of_game: 150,
        count_of_dead_enemy: 20,
        count_of_game: 7,
        user_id: 3,
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
