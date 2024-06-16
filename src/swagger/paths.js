const error500 = require('./error500.json');
module.exports = {
  '/resumes': {
    summary: 'API эндпоинт с резюме',
    get: {
      tags: ['resumes'],
      description: 'API эндпоинт с резюме',
      responses: {
        200: {
          description: 'Возвращает массив резюме',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Resume',
                },
              },
            },
          },
        },
        500: error500,
      },
    },
  },
  '/resumes/random': {
    summary: 'Случайные резюме',
    get: {
      tags: ['resumes'],
      description:
        'Возвращает случайные резюме. Если не передано количество в параметре amount, возвращает 5',
      parameters: [
        {
          in: 'query',
          name: 'amount',
          description: 'Количество резюме',
          required: false,
          schema: {
            type: 'integer',
            minimum: 1,
            maximum: 10,
          },
        },
      ],
      responses: {
        200: {
          description: 'Возвращает несколько случайных резюме (5 или query.amount)',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Resume',
              },
            },
          },
        },
        500: error500,
      },
    },
  },
  '/resumes/{id}': {
    summary: 'API эндпоинт с резюме',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID резюме',
        required: true,
        schema: {
          type: 'integer',
          minimum: 1,
        },
      },
    ],
    get: {
      tags: ['resumes'],
      description: 'API эндпоинт возвращает 1 резюме по id',
      responses: {
        200: {
          description: 'Возвращает резюме 1 резюме по id',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Resume',
              },
            },
          },
        },
        500: error500,
      },
    },
    delete: {
      tags: ['resumes'],
      description: 'API эндпоинт удаляет 1 резюме по id',
      responses: {
        200: {
          description: 'Возвращает OK',
        },
        500: error500,
      },
    },
    patch: {
      tags: ['resumes'],
      description: 'API эндпоинт обновляет 1 резюме по id',
      requestBody: {
        description: 'Обновленные данные',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Resume',
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Возвращает OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Resume',
              },
            },
          },
        },
        500: error500,
      },
    },
  },
  '/resumes/{id}/comments': {
    summary: 'API эндпоинт с комментариями',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID резюме',
        required: true,
        schema: {
          type: 'integer',
          minimum: 1,
        },
      },
    ],
    get: {
      tags: ['resumes', 'comments'],
      description: 'API эндпоинт возвращает комментарии по id резюме',
      responses: {
        200: {
          description: 'Возвращает массив комментариев по id резюме',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Comment',
                },
              },
            },
          },
        },
        500: error500,
      },
    },
    post: {
      tags: ['resumes', 'comments'],
      description: 'API эндпоинт создает комментарий',
      requestBody: {
        description: 'Данные комментария',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                text: {
                  type: 'string',
                },
                isImportant: {
                  type: 'boolean',
                },
              },
              required: ['text', 'isImportant'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Возвращает OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Comment',
              },
            },
          },
        },
        500: error500,
      },
    },
  },
  '/comments/{id}': {
    summary: 'API эндпоинт с комментариями',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID комментария',
        required: true,
        schema: {
          type: 'integer',
          minimum: 1,
        },
      },
    ],
    get: {
      tags: ['comments'],
      description: 'API эндпоинт возвращает 1 комментарий по id',
      responses: {
        200: {
          description: 'Возвращает комментарий 1 по id',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Comment',
              },
            },
          },
        },
        500: error500,
      },
    },
    delete: {
      tags: ['comments'],
      description: 'API эндпоинт удаляет 1 комментарий по id',
      responses: {
        200: {
          description: 'Возвращает OK',
        },
        500: error500,
      },
    },
    patch: {
      tags: ['comments'],
      description: 'API эндпоинт обновляет 1 комментарий по id',
      requestBody: {
        description: 'Обновленные данные',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                text: {
                  type: 'string',
                },
                isImportant: {
                  type: 'boolean',
                },
              },
              required: ['text', 'isImportant'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Возвращает OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Comment',
              },
            },
          },
        },
        500: error500,
      },
    },
  },
  '/comments/{id}/important': {
    summary: 'API эндпоинт с комментариями',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID комментария',
        required: true,
        schema: {
          type: 'integer',
          minimum: 1,
        },
      },
    ],
    patch: {
      tags: ['comments'],
      description: 'API эндпоинт меняет поле isImportant в комментарии',
      responses: {
        200: {
          description: 'Возвращает OK',
        },
        500: error500,
      },
    },
  },
};
