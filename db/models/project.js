'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    furnitureType: DataTypes.STRING,
    serialNumber: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Project.associate = function (models) {
    Project.belongsTo(models.UserProject, { foreignKey: 'projectId' })
    Project.belongsTo(models.Review, { foreignKey: 'projectId' })
  };
  return Project;
};
