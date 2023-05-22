const { unauthorized } = require("@hapi/boom");

const CategoriesService = require("../services/categories.service");
const service = new CategoriesService();

const addCategory = async (_, { dto }, context) => {
  const { user } = await context.authenticate("jwt", { session: false });
  if (!user) throw unauthorized(`jwt is not valid`);
  return service.create(dto);
};

module.exports = {
  addCategory,
};
