const express = require("express");
const cors = require("cors");

const routerApi = require("./app/server");
// Importar middleware
//importar las funciones que se uilizarán
const { checkApiKey } = require("./app/middlewares/auth.handler");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  errorHandlerSequelize,
} = require("./app/middlewares/error.handler");

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

require("./utils/auth");

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/new-route", checkApiKey, (req, res) => {
  res.send("Welcome to new route!");
});

routerApi(app);

// Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandlerSequelize);
app.use(errorHandler);

app.listen(port, () => {
  console.log("listening on port");
});
