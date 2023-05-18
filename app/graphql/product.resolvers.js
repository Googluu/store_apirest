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

const addProduct = async (_, { dto }) => {
  const newProduct = await service.create(dto);
  return newProduct;
};

module.exports = { getProduct, getProducts, addProduct };
