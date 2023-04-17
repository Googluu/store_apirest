const Joi = require("joi");

const userSchema = Joi.object({
  id: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  rol: Joi.string().valid("admin", "user").required(),
});

const createUser = (userData) => userSchema.validate(userData);

const updateUser = (userData) =>
  userSchema.validate(userData, { abortEarly: false });

const findUserById = (userId) => {
  const schema = Joi.object({ id: Joi.string().required() });
  return schema.validate({ id: userId });
};

module.exports = {
  createUser,
  updateUser,
  findUserById,
};
