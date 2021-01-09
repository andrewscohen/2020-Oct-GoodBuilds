'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { userName: 'OlgaT', firstName: 'Olga', lastName: 'Thompson', email: 'olga@appacademy.com	', hashedPassword: '$2a$10$KG6aizVvNzUG97CtJb65xOo1pa3SryRBGK7CvpFJVrZl5z6JKJusm', createdAt: new Date(), updatedAt: new Date() },


      { userName: 'AmberH', firstName: 'Amber', lastName: 'Horn', email: 'amber@amber.com', hashedPassword: '$2a$10$nQf/0mixNqp2GI7RiwApAe1id819x8g5fN1T.4RY3cmaXN7cz.AQu', createdAt: new Date(), updatedAt: new Date() },


      { userName: 'MichaelD', firstName: 'Michael', lastName: 'DiGiovanni	', email: 'Digi@appacademy.com', hashedPassword: '$2a$10$k9JKJBJFpxn4tusvYCdm3u0JkReiMAAXTDGcCcXmo7bviyXqAwk7u', createdAt: new Date(), updatedAt: new Date() },


      { userName: 'AndrewC', firstName: 'Andrew', lastName: 'Cohen', email: 'andrewcohen14@gmail.com', hashedPassword: '$2a$10$2ukfxv9AgLZqLuFbUlE7ZOAY7Ai1vdGiFVTBRrirbT6u8npCicXlW	', createdAt: new Date(), updatedAt: new Date() },


      { userName: 'MrOnder', firstName: 'Ohneedher', lastName: 'NoWonder', email: 'thatthingyoudoreference@gmail.com', hashedPassword: '$2a$10$9DOvzCdjW5E802XwvIRlDOxetZ93YB2JsEHeBQVVUaRrJEkQwQsFe', createdAt: new Date(), updatedAt: new Date() },

      { userName: 'demo', firstName: 'Demo', lastName: 'Demo', email: 'demo@demo.com', hashedPassword: '$2a$10$GDDk/m7RuySPmXjSqJmZ8OG9MNIGYaUn3ZgLo6jwiIjn5s9Bwj7TG', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
