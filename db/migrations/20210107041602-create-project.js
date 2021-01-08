'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      furnitureType: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      serialNumber: {
        type: Sequelize.STRING(50)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,

      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Projects');
  }
};
