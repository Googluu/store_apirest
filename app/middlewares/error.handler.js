const { ValidationError } = require("sequelize");
const { isBoom } = require("@hapi/boom");

//Creamos función que nos hará llegar a un middleware de tipo error:
function logErrors(err, req, res, next) {
  console.log(err); //mostrar el error en servidor para poder monitorearlo
  next(err); //importante para saber que se esta enviando a un middleware de tipo error, si no tiene el error dentro entonces se esta mandando a uno normal
}

// Crear formato para devolverlo al cliente que se complementa con la función anterior:
function errorHandler(err, req, res, next) {
  //así no se utilice next en el código se debe poner aqui, ya que un middleware de error tiene los cuatro parámetros
  res.status(500).json({
    //indicar que el error es estatus 500 Internal Server Error
    message: err.message, //mostrar al cliente el mensaje de error
    stack: err.stack, //mostrar info del error
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
}; //exportarlo como modulo
