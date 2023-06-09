const bcrypt = require("bcrypt");
const { notFound } = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class UsersService {
  constructor() {
    this.users = [];
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash,
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async findAll() {
    const users = await models.User.findAll({
      include: ["customer"],
    });
    return users;
  }

  async findByEmail(email) {
    const users = await models.User.findOne({
      where: { email },
    });
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) throw notFound(`User ${id} not found`);
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = await user.update(changes);
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}

module.exports = UsersService;
