const { Resume } = require('../db/models');
const downloadImages = require('./utils/downloadImages');
const generateResume = require('./utils/generateResume');

(async () => {
  const images = await downloadImages(50);
  await Resume.bulkCreate(images.map(generateResume));
})();
