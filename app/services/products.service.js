const { notFound } = require("@hapi/boom");

const { models } = require("../../libs/sequelize");
class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async findAll(query) {
    const option = {
      include: ["category"],
    };
    const { limit, offset } = query;
    if (limit && offset) {
      option.limit = limit;
      option.offset = offset;
    }

    const products = await models.Product.findAll(option);
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id, {
      include: ["category"],
    });
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
