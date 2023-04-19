const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string();
// rol: Joi.string().valid("admin", "customer").required(),

const createUser = Joi.object({
  email: email.required(),
  password: password.required(),
});

const updateUser = Joi.object({
  email: email,
  password: password,
});

const findUserById = Joi.object({
  id: id.required(),
});

module.exports = {
  createUser,
  updateUser,
  findUserById,
};
