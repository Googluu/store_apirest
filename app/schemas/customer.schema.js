const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone = Joi.string();
// const email = Joi.string().email();
// const password = Joi.string();
const userId = Joi.number().integer();

const createCustomer = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required(),
  // userId: Joi.object({
  //   email: email.required(),
  //   password: password.required(),
  // }),
});

const updateCustomer = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  // email: email,
  // password: password,
  userId: userId,
});

const findCustomerById = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomer,
  updateCustomer,
  findCustomerById,
};
