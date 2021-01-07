'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'createdAt', { defaultValue: new Date(), type: Sequelize.DATE });
    await queryInterface.changeColumn('Projects', 'updatedAt', { defaultValue: new Date(), type: Sequelize.DATE });

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'createdAt', {
      defaultValue: null,
      allowNull: true,
    });
    await queryInterface.changeColumn('Projects', 'createdAt', {
      defaultValue: null,
      allowNull: true,
    });
  }
};
