'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      difficultyLevel: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      completionTime: {
        type: Sequelize.STRING(50)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      projectId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Projects' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};
