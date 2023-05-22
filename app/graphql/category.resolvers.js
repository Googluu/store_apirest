const CategoriesService = require("../services/categories.service");
const service = new CategoriesService();

const addCategory = (_, { dto }) => {
  return service.create(dto);
};

module.exports = {
  addCategory,
};
