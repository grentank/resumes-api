'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Resume }) {
      this.belongsTo(Resume, { foreignKey: 'resumeId' });
    }
  }
  Comment.init(
    {
      text: DataTypes.STRING,
      isImportant: DataTypes.BOOLEAN,
      resumeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
