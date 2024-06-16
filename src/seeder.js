const { Resume } = require('../db/models');
const downloadImages = require('./utils/downloadImages');
const generateResume = require('./utils/generateResume');

async function seed(amount, url) {
  const images = await downloadImages(amount, url);
  return Resume.bulkCreate(images.map(generateResume));
}

module.exports = seed;
