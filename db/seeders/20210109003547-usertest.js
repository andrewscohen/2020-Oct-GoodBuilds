'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { userName: 'lemonuser', firstName: 'Amanda', lastName: 'Holmens', email: 'aholmes@gmail.com', hashedPassword: 'asdfasdf', createdAt: new Date(), updatedAt: new Date()},
      { userName: 'orangeuser', firstName: 'Mark', lastName: 'Smith', email: 'mshmith@gmail.com', hashedPassword: 'adfsdfsdf', createdAt: new Date(), updatedAt: new Date()},
      { userName: 'appleuser', firstName: 'John', lastName: 'Smith', email: 'jsmith@gmail.com', hashedPassword: 'dfadfsdf', createdAt: new Date(), updatedAt: new Date()},

  ])},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {});
  }
};
