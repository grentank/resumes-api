const express = require('express');
const { Resume, sequelize } = require('../../db/models');

const apiRouter = express.Router();

apiRouter.get('/', async (req, res) => {
  try {
    return res.json(await Resume.findAll({ order: sequelize.random(), limit: 10 }));
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

apiRouter.get('/:id', async (req, res) => {
  try {
    return res.json(await Resume.findByPk(req.params.id));
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = apiRouter;
