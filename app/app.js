const express = require("express");
const cors = require("cors");
const passport = require("passport");

const { routerApi } = require("./server");
const useGraphql = require("./graphql");
const { checkApiKey } = require("./middlewares/auth.handler");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  errorHandlerSequelize,
} = require("./middlewares/error.handler");

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(passport.initialize());

  require("../utils/auth");

  app.get("/", (req, res) => {
    res.send("Welcome");
  });

  app.get("/new-route", checkApiKey, (req, res) => {
    res.send("Welcome to new route!");
  });

  routerApi(app);
  await useGraphql(app);

  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandlerSequelize);
  app.use(errorHandler);

  return app;
};

module.exports = createApp;
