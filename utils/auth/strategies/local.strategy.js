const { Strategy } = require("passport-local");
const { unauthorized } = require("@hapi/boom");
const bcrypt = require("bcrypt");

const UsersService = require("../../../app/services/users.service");
const service = new UsersService();

const LocalStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) done(unauthorized(), false);
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) done(unauthorized(), false);
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = { LocalStrategy };
