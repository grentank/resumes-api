const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const resumesRouter = require('./routes/resumesRouter');
const resource = require('./swagger/resource');
const commentsRouter = require('./routes/commentsRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/resumes', resumesRouter);
app.use('/api/comments', commentsRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(resource));

module.exports = app;
