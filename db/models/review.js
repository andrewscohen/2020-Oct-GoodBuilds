'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    difficultyLevel: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    completionTime: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Project, { foreignKey: 'projectId' })
  };
  return Review;
};
