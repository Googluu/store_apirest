const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string();
const role = Joi.string().min(5);

const createUser = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

const updateUser = Joi.object({
  email,
  password,
  role,
});

const findUserById = Joi.object({
  id: id.required(),
});

module.exports = {
  createUser,
  updateUser,
  findUserById,
};
