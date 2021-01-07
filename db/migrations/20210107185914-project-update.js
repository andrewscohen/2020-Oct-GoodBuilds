'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'createdAt', { defaultValue: new Date(), type: Sequelize.DATE });
    await queryInterface.changeColumn('Projects', 'updatedAt', { defaultValue: new Date(), type: Sequelize.DATE });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'createdAt', {
      defaultValue: null,
      allowNull: true,
      type: Sequelize.DATE,
    });
    await queryInterface.changeColumn('Projects', 'updatedAt', {
      defaultValue: null,
      allowNull: true,
      type: Sequelize.DATE,
    });
  }
};
