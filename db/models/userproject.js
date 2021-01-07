'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define('UserProject', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    projectDeadline: DataTypes.DATEONLY,
    buildStatus: DataTypes.STRING
  }, {});
  UserProject.associate = function (models) {
  };
  return UserProject;
};