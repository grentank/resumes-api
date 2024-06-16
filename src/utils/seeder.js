const { Resume } = require('../../db/models');
const downloadImages = require('./downloadImages');
const generateResume = require('./generateResume');

const seeder = async () => {
  const images = await downloadImages(20);
  await Resume.bulkCreate(images.map(generateResume));
};
