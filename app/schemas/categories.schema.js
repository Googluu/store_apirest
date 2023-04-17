const Joi = require("joi");

const categoriesSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().min(3).max(15),
  image: Joi.string().uri().required(),
});

const createCategory = (categoryData) =>
  categoriesSchema.validate(categoryData);

const updateCategory = (categoryData) =>
  categoriesSchema.validate(categoryData, { abortEarly: false });

const findCategoryById = (categoryId) => {
  const schema = Joi.object({ id: Joi.number().integer().required() });
  return schema.validate({ id: categoryId });
};

module.exports = {
  createCategory,
  updateCategory,
  findCategoryById,
};
