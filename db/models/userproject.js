'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define('UserProject', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    projectDeadline: DataTypes.DATEONLY,
    buildStatus: DataTypes.STRING
  }, {});
  UserProject.associate = function (models) {
    UserProject.belongsTo(models.User, { foreignKey: 'userId' })
    UserProject.hasMany(models.Project, { foreignKey: 'projectId' })
  };
  return UserProject;
};
