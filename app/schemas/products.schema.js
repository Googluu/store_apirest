const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(20),
  price: Joi.number().integer().min(10),
});

const createProductSchema = productSchema.keys({
  name: Joi.string().alphanum().min(3).max(20).required(),
  price: Joi.number().integer().min(10).required(),
});

const updateProductSchema = productSchema;

const getProductSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
