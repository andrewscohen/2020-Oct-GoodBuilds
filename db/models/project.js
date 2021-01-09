'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    furnitureType: DataTypes.STRING,
    serialNumber: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgLink: DataTypes.STRING,
    productLink: DataTypes.STRING
  }, {});
  Project.associate = function (models) {
    const projectUserMap = {
      foreignKey: 'projectId',
      through: 'UserProject',
      otherKey: 'userId'
    }
    Project.belongsToMany(models.User, projectUserMap);
    Project.hasMany(models.Review, { foreignKey: 'projectId' });
  };
  return Project;
};
