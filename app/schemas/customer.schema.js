const Joi = require("joi");

const { createUser, updateUser } = require("./users.schema");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone = Joi.string();

const createCustomer = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: createUser,
});

const updateCustomer = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  user: updateUser,
});

const findCustomerById = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomer,
  updateCustomer,
  findCustomerById,
};
