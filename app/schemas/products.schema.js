const Joi = require("joi");

// const { createCategory, updateCategory } = require("../schemas/categories.schema");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.string().min(10);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProduct = Joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

const updateProduct = Joi.object({
  name: name,
  description: description,
  price: price,
  image: image,
  categoryId: categoryId,
});

const findProductById = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  limit,
  offset,
});

module.exports = {
  createProduct,
  updateProduct,
  findProductById,
  queryProductSchema,
};
