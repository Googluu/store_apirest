const { ValidationError } = require("sequelize");
const { isBoom } = require("@hapi/boom");

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (isBoom(err)) {
    const { payload, statusCode } = err.output;
    res.status(statusCode).json(payload);
  } else next(err);
}

function errorHandlerSequelize(err, req, res, next) {
  if (
    err instanceof ValidationError ||
    err.message === "SequelizeUniqueConstraintError"
  ) {
    res.status(409).json({
      statusCode: 409,
      message: "El email ya existe en la base de datos",
      errors: err.errors,
    });
  } else next(err);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  errorHandlerSequelize,
};
