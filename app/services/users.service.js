class UsersService {
  constructor() {
    this.users = [];
  }

  async create(data) {
    return data;
  }

  async findAll() {
    return "users";
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
