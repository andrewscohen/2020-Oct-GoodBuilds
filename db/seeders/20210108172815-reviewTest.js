'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [
      { difficultyLevel: 3, content: 'WOW! This is an amazing table, it changed my life!', rating: 6, completionTime: ' 22 hrs', userId: 1, projectId: 1, createdAt: new Date(), updatedAt: new Date() },
      { difficultyLevel: 2, content: 'stupid table broke my toe', rating: 2, completionTime: ' 2 hrs', userId: 2, projectId: 1, createdAt: new Date(), updatedAt: new Date() },
      { difficultyLevel: 1, content: 'spicy!', rating: 9, completionTime: ' 30 mins', userId: 3, projectId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};

