'use strict';

const { Enemy } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Enemy.bulkCreate([
      {
        emoji: '👾',
        speed: 10,
        live_count: 3,
      },
      {
        emoji: '💀',
        speed: 8,
        live_count: 2,
      },
      {
        emoji: '👹',
        speed: 12,
        live_count: 4,
      },
      {
        emoji: '👻',
        speed: 15,
        live_count: 5,
      },
      {
        emoji: '👽',
        speed: 9,
        live_count: 3,
      },
      {
        emoji: '👿',
        speed: 11,
        live_count: 2,
      },
      {
        emoji: '💩',
        speed: 7,
        live_count: 1,
      },
      {
        emoji: '🤡',
        speed: 14,
        live_count: 3,
      },
      {
        emoji: '🤺',
        speed: 13,
        live_count: 4,
      },
      {
        emoji: '🧛',
        speed: 10,
        live_count: 5,
      },
      {
        emoji: '🧟',
        speed: 6,
        live_count: 2,
      },
      {
        emoji: '🎃',
        speed: 8,
        live_count: 3,
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
