'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'createdAt', { defaultValue: new Date(), type: Sequelize.DATE });
    await queryInterface.changeColumn('Projects', 'updatedAt', { defaultValue: new Date(), type: Sequelize.DATE });
  },

  down: (queryInterface, Sequelize) => {
  }
};
