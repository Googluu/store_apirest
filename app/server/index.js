const { Router } = require("express");

const productsRouter = require("../routes/products");
const usersRouter = require("../routes/users");
const categoriesRouter = require("../routes/categories");
const customersRouter = require("../routes/customers");
const ordersRouter = require("../routes/order");
const authRouter = require("../routes/auth");
const profileRouter = require("../routes/profile");

function routerApi(app) {
  const router = Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/categories", categoriesRouter);
  router.use("/customers", customersRouter);
  router.use("/orders", ordersRouter);
  router.use("/auth", authRouter);
  router.use("/profile", profileRouter);
}

module.exports = { routerApi };
