const { z } = require('zod');
const commentSchema = require('./comment');

const resumeSchema = z.object({
  id: z.number().int(),
  img: z.string(),
  fullName: z.string(),
  birthDate: z.date(),
  about: z.string(),
  technologies: z.array(z.string()),
  achievments: z.array(z.string()),
  education: z.string(),
  position: z.string(),
  prefered: z.string(),
  phone: z.string(),
  telegram: z.string(),
  git: z.string(),
  email: z.string(),
  salary: z.number().int().nonnegative(),
  Comments: commentSchema.array(),
});

module.exports = resumeSchema;
