const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string();
const rol = Joi.string().valid("admin", "customer");

const createUser = Joi.object({
  email: email.required(),
  password: password.required(),
  rol: rol.required(),
});

const updateUser = Joi.object({
  email: email,
  password: password,
  rol: rol,
});

const findUserById = Joi.object({
  id: id.required(),
});

module.exports = {
  createUser,
  updateUser,
  findUserById,
};
