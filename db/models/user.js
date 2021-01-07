'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      unique: true
    },
  }, {});
  User.associate = function (models) {
    User.hasOne(models.UserProject, { foreignKey: 'userId' });
    User.hasMany(models.Review, { foreignKey: 'userId' })
  };
  return User;
};
