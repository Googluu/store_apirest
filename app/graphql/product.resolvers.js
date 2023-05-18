const ProductsService = require("../services/products.service");
const service = new ProductsService();

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id);
  return product;
};

const getProducts = async () => {
  const products = await service.findAll({});
  return products;
};

module.exports = { getProduct, getProducts };
