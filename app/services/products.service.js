const { notFound } = require("@hapi/boom");

const { models } = require("../../libs/sequelize");
class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async findAll() {
    const products = await models.Product.findAll({
      include: ["category"],
    });
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) throw notFound(`Product id=${id} not found`);
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const response = await product.update(changes);
    return response;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
  }
}

module.exports = ProductsService;
