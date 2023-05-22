const { checkRolesGql } = require("../../utils/checkRolesGql");
const { checktJwtGql } = require("../../utils/checkJwt");
const CategoriesService = require("../services/categories.service");
const service = new CategoriesService();

const addCategory = async (_, { dto }, context) => {
  const user = await checktJwtGql(context);
  checkRolesGql(user, "admin");
  return service.create(dto);
};

module.exports = {
  addCategory,
};
