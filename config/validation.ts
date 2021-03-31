import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number(),
  DB_HOST: Joi.string(),
  DB_PASSWORD: Joi.string(),
  DB_USER: Joi.string(),
  DB_NAME: Joi.string(),
  DB_PORT: Joi.number(),
});
