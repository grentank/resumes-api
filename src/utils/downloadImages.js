const axios = require('axios');
const fs = require('fs');
const faker = require('community-faker');
const wait = require('./wait');

const downloadImages = async (number) => {
  const images = [];
  for (let index = 0; index < number; index += 1) {
    await wait(100);
    const url = 'https://this-person-does-not-exist.com';
    const newQuery = '/?new=1677753751872';
    const { data } = await axios.get(url + newQuery);

    if (data.generated !== 'true') throw new Error('API error (this-person-does-not-exist)');

    const response = await axios.get(url + data.src, { responseType: 'stream' });

    const uuid = faker.datatype.uuid();

    const filePath = `./public/img/${uuid}.jpg`;

    const writeStream = fs.createWriteStream(filePath);
    response.data.pipe(writeStream);

    await new Promise((res) => writeStream.on('finish', res));
    images.push(`${uuid}.jpg`);
  }
  return images;
};

module.exports = downloadImages;
