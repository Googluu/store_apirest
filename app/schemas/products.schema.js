const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.string().min(10);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProduct = Joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
});

const updateProduct = Joi.object({
  name: name,
  description: description,
  price: price,
  image: image,
});

const findProductById = Joi.object({
  id: id.required(),
});

module.exports = {
  createProduct,
  updateProduct,
  findProductById,
};
