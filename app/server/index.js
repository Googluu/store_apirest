const express = require("express");

const productsRouter = require("../routes/products");
const usersRouter = require("../routes/users");
const categoriesRouter = require("../routes/categories");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/categories", categoriesRouter);
}

module.exports = routerApi;
