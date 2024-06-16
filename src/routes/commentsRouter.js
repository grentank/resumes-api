const { Router } = require('express');
const { Comment } = require('../../db/models');
const commentSchema = require('../schemas/comment');

const commentsRouter = Router();

commentsRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      if (Number.isNaN(Number(id))) throw new Error('id должен быть числом');
      const comment = await Comment.findOne({ where: { id } });
      res.json(commentSchema.parse(comment));
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      if (Number.isNaN(Number(id))) throw new Error('id должен быть числом');
      await Comment.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      if (Number.isNaN(Number(id))) throw new Error('id должен быть числом');
      const comment = await Comment.findOne({ where: { id } });
      await comment.update(commentSchema.partial().parse(req.body));
      res.json(commentSchema.parse(comment));
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });

commentsRouter.patch('/:id/important', async (req, res) => {
  try {
    const { id } = req.params;
    if (Number.isNaN(Number(id))) throw new Error('id должен быть числом');
    const comment = await Comment.findOne({ where: { id } });
    await comment.update({ isImportant: !comment.isImportant });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = commentsRouter;
