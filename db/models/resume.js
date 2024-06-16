const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Resume extends Model {
    static associate() {}
  }
  Resume.init(
    {
      img: DataTypes.STRING,
      fullName: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      about: DataTypes.TEXT,
      technologies: DataTypes.ARRAY(DataTypes.STRING),
      achievments: DataTypes.ARRAY(DataTypes.STRING),
      education: DataTypes.STRING,
      prefered: DataTypes.STRING,
      phone: DataTypes.STRING,
      telegram: DataTypes.STRING,
      git: DataTypes.STRING,
      email: DataTypes.STRING,
      salary: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Resume',
    },
  );
  return Resume;
};
