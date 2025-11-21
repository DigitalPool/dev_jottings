export const logInSchema = {
  body: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        minLenght: '1',
        maxLenght: '30',
        pattern: '^[a-zA-Z0-9_]+$'
      },
      password: {
        type: 'string',
        minLength: 6,
        pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-={}\\[\\]|;:\'",.<>/?]).+$'
      }
    },
    additionalProperties: false,
    required: ['username', 'password']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        userId: { type: 'number' },
        username: { type: 'string' },
        avatar: { type: 'string' },
        preferred_language: { type: 'string' }
      }
    },
    400: {
    type: 'object',
    properties: {
      error: { type: 'string' }
      }
    },
    401: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    },
    404: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    },
    409: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    },
    422: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    },
    503: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    }
  }
}

export const logoutSchema = {
  tags: ['Auth'],
  summary: 'Logout user and clear session',
  description: 'Removes the session from database and clears the sessionId cookie',
  response: {
    200: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true }
      },
      required: ['success']
    }
  }
};


export const registerSchema = {
  tags: ['Auth'],
  summary: 'Register a new user (multipart, avatar optional)',
  consumes: ['multipart/form-data'],
  body: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        minLength: 3,
        maxLength: 30,
        pattern: '^[a-zA-Z0-9_]+$'
      },
      email: {
        type: 'string',
        format: 'email'
      },
      password: {
        type: 'string',
        minLength: 6
      },
      avatar: {
        type: 'string',
        format: 'binary',
        description: 'Avatar image file (optional)'
      }
    },
    required: ['username', 'email', 'password'],
    additionalProperties: false
  },
  response: {
    200: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        userId: { type: 'integer' },
        username: { type: 'string' },
        avatar: { type: 'string' },
      },
    },
    400: {
      type: 'object',
      properties: { error: { type: 'string' } },
    },
    409: {
      type: 'object',
      properties: { error: { type: 'string' } },
    },
    422: {
      type: 'object',
      properties: { error: { type: 'string' } },
    },
  },
}