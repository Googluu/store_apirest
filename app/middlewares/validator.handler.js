const { badRequest } = require("@hapi/boom");

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      next(badRequest(error));
    } else next();
  };
}

module.exports = validatorHandler;
