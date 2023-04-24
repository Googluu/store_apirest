const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const phone = Joi.string();

const createCustomer = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
});

const updateCustomer = Joi.object({
  name,
  lastName,
  phone,
  userId,
});

const findCustomerById = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomer,
  updateCustomer,
  findCustomerById,
};
