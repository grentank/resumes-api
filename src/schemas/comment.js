const { z } = require('zod');

const commentSchema = z.object({
  id: z.number().int(),
  text: z.string(),
  isImportant: z.boolean().optional(),
  resumeId: z.number().int(),
});

module.exports = commentSchema;
