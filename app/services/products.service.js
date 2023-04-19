const { faker } = require("@faker-js/faker");
const { notFound, conflict } = require("@hapi/boom");

const createRandomProducts = require("../../data_faker/products_faker");
const sequelize = require("../../libs/sequelize");

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push(createRandomProducts());
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async findAll() {
    const query = "SELECT * FROM tasks";
    const [data] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    const blocked = faker.datatype.boolean();
    if (!product) throw notFound(`Product with id=${id} not found`);
    if (blocked) throw conflict(`Product is block`);
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) throw notFound("Product not found");
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) throw notFound("Product not found");
    this.products.splice(index, 1);
  }
}

module.exports = ProductsService;
