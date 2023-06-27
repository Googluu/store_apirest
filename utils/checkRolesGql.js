const { unauthorized } = require("@hapi/boom");

function checkRolesGql(user, ...roles) {
  if (!roles.includes(user.role)) {
    throw unauthorized("Your role is not allow");
  }
}

module.exports = { checkRolesGql };
