const { notFound } = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class CustomerService {
  constructor() {}

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ["user"],
    });
    return newCustomer;
  }

  async findAll() {
    const cutomer = await models.Customer.findAll({
      include: ["user"],
    });
    return cutomer;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) throw notFound(`Customer ${id} not found`);
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const response = await customer.update(changes);
    return response;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
  }
}

module.exports = CustomerService;
