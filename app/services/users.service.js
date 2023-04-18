const getConnection = require("../../libs/postgres");

class UsersService {
  constructor() {
    this.users = [];
  }

  async create(data) {
    return data;
  }

  async findAll() {
    const client = await getConnection();
    const response = await client.query("SELECT * FROM tasks");
    return response.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return { id, changes };
  }

  async delete(id) {
    return `${id} eliminado`;
  }
}

module.exports = UsersService;
