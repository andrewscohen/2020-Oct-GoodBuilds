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

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};


// 'use strict';
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.renameColumn('Users', 'name', 'firstName', {
//       type: Sequelize.STRING,
//     })
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.renameColumn('Users', 'firstName', 'name', {
//       type: Sequelize.STRING,
//     })
//   }
// };
// And this is in an example of adding a new column(lastName) to the same table Users:

// 'use strict';
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.addColumn('Users', 'lastName', {
//       type: Sequelize.STRING
//     })
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.removeColumn("Users", "lastName")
//   }
// };
