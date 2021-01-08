'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Projects', 'imgLink', { type: Sequelize.STRING })
    await queryInterface.addColumn('Projects', 'productLink', { type: Sequelize.STRING })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Projects', 'imgLink', { type: Sequelize.STRING })
    await queryInterface.removeColumn('Projects', 'productLink', { type: Sequelize.STRING })
  }
};
