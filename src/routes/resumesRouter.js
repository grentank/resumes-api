const { Router } = require('express');
const { Sequelize } = require('sequelize');
const { Resume, Comment } = require('../../db/models');
const resumeSchema = require('../schemas/resume');
const commentSchema = require('../schemas/comment');

const resumesRouter = Router();

resumesRouter.route('/').get(async (req, res) => {
  try {
    const resumes = await Resume.findAll({
      include: Comment,
    });
    res.json(resumeSchema.array().parse(resumes));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

resumesRouter.route('/random').get(async (req, res) => {
  try {
    const { amount } = req.query;
    if (amount && Number.isNaN(Number(amount))) throw new Error('amount is not a number');
    const resume = await Resume.findAll({
      order: Sequelize.literal('random()'),
      limit: amount ? Number(amount) : 5,
      include: Comment,
    });
    res.json(resumeSchema.array().parse(resume));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

resumesRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      if (Number.isNaN(Number(req.params.id))) throw new Error('id is not a number');
      const resume = await Resume.findByPk(req.params.id, {
        include: {
          model: Comment,
          order: [['id', 'ASC']],
        },
      });
      res.json(resumeSchema.parse(resume));
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  })
  .delete(async (req, res) => {
    try {
      if (Number.isNaN(Number(req.params.id))) throw new Error('id is not a number');
      const resume = await Resume.findByPk(req.params.id);
      await resume.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  })
  .patch(async (req, res) => {
    try {
      if (Number.isNaN(Number(req.params.id))) throw new Error('id is not a number');
      const resume = await Resume.findOne({
        where: { id: req.params.id },
        include: Comment,
      });
      await resume.update(resumeSchema.partial().parse(req.body));
      res.json(resumeSchema.parse(resume));
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });

resumesRouter
  .route('/:id/comments')
  .get(async (req, res) => {
    try {
      if (Number.isNaN(Number(req.params.id))) throw new Error('id is not a number');
      const comments = await Comment.findAll({
        where: {
          resumeId: req.params.id,
        },
      });
      res.json(commentSchema.array().parse(comments));
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      if (Number.isNaN(Number(req.params.id))) throw new Error('id is not a number');
      const comment = await Comment.create({
        resumeId: req.params.id,
        ...commentSchema.partial().parse(req.body),
      });
      res.json(commentSchema.parse(comment));
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });

module.exports = resumesRouter;
