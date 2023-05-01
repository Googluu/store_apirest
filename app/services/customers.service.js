const { notFound } = require("@hapi/boom");

const bcrypt = require("bcrypt");
const { models } = require("../../libs/sequelize");

class CustomerService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash,
      },
    };
    const newCustomer = await models.Customer.create(newData, {
      include: ["user"],
    });
    delete newCustomer.user.dataValues.password;
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
