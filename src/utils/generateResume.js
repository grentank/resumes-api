const faker = require('community-faker');
const { about, prefered, education, technologies, achievments, position } = require('./constants');
const dictionary = require('./dictionary');
const generateIndexes = require('./generateIndexes');

const generateResume = (img) => {
  faker.locale = 'ru';
  const firstName = faker.name.firstName('male');
  const secondName = faker.name.lastName('male');
  const newNameRus = `${firstName} ${
    secondName.at(-1) === 'а' ? secondName.slice(0, -1) : secondName
  }`;
  const newName = newNameRus
    .split('')
    .map((char) => dictionary[char])
    .join('');

  return {
    img,
    fullName: newNameRus,
    birthDate: faker.date.past(),
    about: about[generateIndexes(about.length, 1, 1)[0]],
    technologies: generateIndexes(technologies.length, 4, 7).map((index) => technologies[index]),
    achievments: generateIndexes(achievments.length, 3, 6).map((index) => achievments[index]),
    education: education[generateIndexes(education.length, 1, 1)[0]],
    position: position[generateIndexes(position.length, 1, 1)[0]],
    prefered: prefered[generateIndexes(prefered.length, 1, 1)[0]],
    phone: faker.phone.phoneNumber(),
    telegram: `@${faker.internet.userName(...newName.split(' '))}`,
    git: `https://github.com/${faker.internet.userName(...newName.split(' '))}`,
    email: faker.internet.email(...newName.split(' ')),
    salary: (Math.round(Math.random() * 14) + 6) * 10000,
  };
};

module.exports = generateResume;
