// const downloadImages = require('../../src/utils/downloadImages');
// const generateResume = require('../../src/utils/generateResume');
// const { Resume } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const images = await downloadImages(50);
    // await Resume.bulkCreate(images.map(generateResume));
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('Resumes', null, {});
  },
};
