const schemas = require('./schemas.json');
const paths = require('./paths');
module.exports = {
  openapi: '3.1.0',
  paths,
  info: {
    version: '1.0.0',
    title: 'Резюме API',
    description:
      'Это API сервер, который предоставляет интерфейс взаимодействия с резюме разработчиков и с комментариями к данным резюме.',
    contact: {
      name: 'Alexander grentank Knyazev',
      url: 'https://github.com/grentank',
    },
  },
  components: {
    schemas,
    responses: {
      NotFound: {
        description: 'Entity not found.',
      },
      ServerError: {
        description: 'General Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ServerError',
            },
          },
        },
      },
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
    },
  ],
};
