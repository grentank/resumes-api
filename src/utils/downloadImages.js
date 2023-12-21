const axios = require('axios');
const fs = require('fs');
const faker = require('community-faker');
const wait = require('./wait');

const downloadImages = async (number, hostUrl) => {
  const images = [];
  for (let index = 0; index < number; index += 1) {
    await wait(Math.ceil(Math.round() * 100));
    const url = 'https://this-person-does-not-exist.com';
    const { data } = await axios.get(`${url}/en`);
    const imgUrl = data.match(/<img id="avatar" loading="lazy" src="(.*?)"/)[1];

    const response = await axios.get(url + imgUrl, { responseType: 'stream' });

    const uuid = faker.datatype.uuid();

    const filePath = `./public/resumes/img/${uuid}.jpg`;

    const writeStream = fs.createWriteStream(filePath);
    response.data.pipe(writeStream);

    await new Promise((res) => writeStream.on('finish', res));
    images.push(`${hostUrl}/resumes/img/${uuid}.jpg`);
  }
  return images;
};

module.exports = downloadImages;
