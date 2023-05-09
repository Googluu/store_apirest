const express = require("express");
const cors = require("cors");
const passport = require("passport");

const { config } = require("./config/config");
const useGraphql = require("./app/graphql");

const routerApi = require("./app/server");
const { checkApiKey } = require("./app/middlewares/auth.handler");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  errorHandlerSequelize,
} = require("./app/middlewares/error.handler");

const app = express();

const port = config.port || 3000;

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

require("./utils/auth");

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/new-route", checkApiKey, (req, res) => {
  res.send("Welcome to new route!");
});

routerApi(app);
useGraphql(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandlerSequelize);
app.use(errorHandler);

app.listen(port, () => {
  console.log("listening on port");
});
