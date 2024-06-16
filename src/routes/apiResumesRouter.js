const express = require('express');
const { Resume, sequelize } = require('../../db/models');
const seed = require('../seeder');
const calculateAmount = require('../utils/calculateAmount');

const apiResumesRouter = express.Router();

apiResumesRouter.get('/', async (req, res) => {
  try {
    const { amount } = req.query;
    const data = await Resume.findAll({
      order: sequelize.random(),
      limit: calculateAmount(amount),
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

apiResumesRouter.get('/:id', async (req, res) => {
  try {
    if (!Number.isInteger(Number(req.params.id))) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    const resume = await Resume.findByPk(req.params.id);
    res.json(resume);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

apiResumesRouter.post('/seed', async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];
    if (token !== process.env.SEED_TOKEN)
      return res.status(401).json({ message: 'Invalid seed token' });
    const { amount } = req.body;
    if (!Number.isInteger(Number(amount)))
      return res.status(400).json({ message: 'Invalid amount' });

    await seed(Number(amount), `${req.protocol}://${req.get('host')}`);
    return res.status(200).json({ message: 'Seeding completed' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Invalid seed token' });
  }
});

module.exports = apiResumesRouter;
