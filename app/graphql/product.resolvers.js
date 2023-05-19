const ProductsService = require("../services/products.service");
const service = new ProductsService();

const getProduct = (_, { id }) => {
  return service.findOne(id);
};

const getProducts = () => {
  return service.findAll({});
};

const addProduct = (_, { dto }) => {
  return service.create(dto);
};

const updateProduct = (_, { id, dto }) => {
  return service.update(id, dto);
};

const deleteProduct = (_, { id }) => {
  return service.delete(id);
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
