const { notFound } = require("@hapi/boom");

const { models } = require("../../libs/sequelize");
class CategoriesService {
  constructor() {}

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async findAll() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      // include: ["products"],
    });
    if (!category) throw notFound(`Category ${id} not found`);
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const response = await category.update(changes);
    return response;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
  }
}

module.exports = CategoriesService;
