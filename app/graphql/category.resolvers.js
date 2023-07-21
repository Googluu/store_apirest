const { checkRolesGql } = require("../../utils/checkRolesGql");
const { checktJwtGql } = require("../../utils/checkJwt");
const CategoriesService = require("../services/categories.service");
const service = new CategoriesService();

const addCategory = async (_, { dto }, context) => {
  const user = await checktJwtGql(context);
  checkRolesGql(user, "admin");
  console.log(dto);
  return service.create({
    ...dto,
    image: dto.image.href,
  });
};

const getCategory = (_, { id }) => {
  return service.findOne(id);
};

const getAllCategory = () => {
  return service.findAll();
};

module.exports = {
  addCategory,
  getCategory,
  getAllCategory,
};
