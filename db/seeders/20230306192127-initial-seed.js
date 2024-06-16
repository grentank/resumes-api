const fs = require('fs/promises');
const path = require('path');
const process = require('process');
const generateResume = require('../../src/utils/generateResume');
const { Resume, Comment } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cwd = process.cwd();
    const pathToImages = path.join(cwd, 'public', 'img');
    const images = await fs.readdir(pathToImages, 'utf8');
    await Resume.bulkCreate(images.map(generateResume));

    await Comment.bulkCreate([
      { text: 'Ожидаю ответа на письмо', resumeId: 1, isImportant: false },
      { text: 'Кандидат отказался', resumeId: 1, isImportant: false },
      { text: 'Завтра видео интервью в 12 часов', resumeId: 2, isImportant: true },
      { text: 'Позвонить', resumeId: 3, isImportant: true },
      { text: 'Поговорить', resumeId: 3, isImportant: false },
      { text: 'Узнать, как дела', resumeId: 3, isImportant: true },
      { text: 'Позвонить на вотсап', resumeId: 4, isImportant: true },
      { text: 'Списаться', resumeId: 5, isImportant: false },
      { text: 'Звонок по зуму в 17:30', resumeId: 5, isImportant: false },
      {
        text: 'Фидбек звонка: кандидат хороший. Жуёт козявки',
        resumeId: 5,
        isImportant: false,
      },
      { text: 'Договориться на техсобес', resumeId: 5, isImportant: true },
      {
        text: 'Встретились очно. От кандидата воняло сыром и плесенью',
        resumeId: 6,
        isImportant: false,
      },
      { text: 'Не отвечает', resumeId: 6, isImportant: false },
      { text: 'Слишком молодой кандидат', resumeId: 7, isImportant: false },
      { text: 'Удалить из системы', resumeId: 8, isImportant: true },
      { text: 'Связаться с администратором', resumeId: 9, isImportant: true },
      { text: 'Связаться с HR', resumeId: 9, isImportant: false },
      { text: 'Связаться с PM', resumeId: 9, isImportant: false },
      { text: 'Связаться с тестировщиком', resumeId: 9, isImportant: true },
      { text: 'Связаться с разработчиком', resumeId: 9, isImportant: true },
      { text: 'Связаться с менеджером', resumeId: 9, isImportant: true },
      { text: 'Связаться с директором', resumeId: 9, isImportant: true },
      { text: 'Связаться с CEO', resumeId: 9, isImportant: true },
      { text: 'Позвонить в полицию', resumeId: 9, isImportant: true },
      { text: 'Связаться с CTO', resumeId: 10, isImportant: false },
      { text: 'Связаться с CIO', resumeId: 10, isImportant: false },
      {
        text: 'Не подходит - слишком много татуировок',
        resumeId: 10,
        isImportant: false,
      },
      { text: 'Написать в личные сообщения', resumeId: 11, isImportant: false },
      { text: 'Написать в вк', resumeId: 14, isImportant: false },
      { text: 'Написать в телеграм', resumeId: 14, isImportant: false },
      { text: 'Написать в офис', resumeId: 14, isImportant: false },
      { text: 'Видимо 3 года опыта только на бумаге', resumeId: 14, isImportant: true },
      { text: 'Написать на почту', resumeId: 15, isImportant: true },
      { text: 'Написать в skype', resumeId: 17, isImportant: false },
      {
        text: 'Много слов-паразитов, вечно твердит что-то про ящеров',
        resumeId: 17,
        isImportant: false,
      },
      { text: 'Написать в hangouts', resumeId: 19, isImportant: false },
      { text: 'Написать в hangouts', resumeId: 19, isImportant: true },
      { text: 'Это он или она?', resumeId: 19, isImportant: false },
      { text: 'Написать в мессенджер', resumeId: 20, isImportant: false },
      { text: 'Написать в мессенджер', resumeId: 20, isImportant: false },
      { text: 'Написать в мессенджер', resumeId: 20, isImportant: false },
      { text: 'Написать в мессенджер!', resumeId: 20, isImportant: false },
      { text: 'НАПИСАТЬ В МЕССЕНЕДЖЕР!!!!!!!!', resumeId: 20, isImportant: true },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Resumes', null, {});
  },
};
