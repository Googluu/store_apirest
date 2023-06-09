const { unauthorized, forbidden } = require("@hapi/boom");

const { config } = require("../../config/config");

function checkApiKey(req, res, next) {
  const apiKey = req.headers["api"];
  if (apiKey === config.apikey) {
    next();
  } else next(unauthorized());
}

function checkAdminRole(req, res, next) {
  console.log(req.user);
  const user = req.user;
  if (user.role === "admin") {
    next();
  } else next(forbidden("se requieren permisos de administrador"));
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else next(forbidden("se requieren permisos de administrador"));
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
