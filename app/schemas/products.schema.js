const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.string().min(10);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

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
  name,
  description,
  price,
  image,
  categoryId,
});

const findProductById = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when("price_min", {
    is: price_max.required(),
    then: Joi.required(),
  }),
});

module.exports = {
  createProduct,
  updateProduct,
  findProductById,
  queryProductSchema,
};
