const express = require("express");

const ProductsService = require("../services/products.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createProduct,
  updateProduct,
  findProductById,
  queryProductSchema,
} = require("../schemas/products.schema");

const router = express.Router();
const service = new ProductsService();

router.get(
  "/",
  validatorHandler(queryProductSchema, "query"),
  async (req, res, next) => {
    try {
      const products = await service.findAll(req.query);
      res.json(products);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  validatorHandler(findProductById, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
    }
  }
);

router.post(
  "/",
  validatorHandler(createProduct, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(findProductById, "params"),
  validatorHandler(updateProduct, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateProduct = await service.update(id, body);
      res.json(updateProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(findProductById, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.delete(id);
      res.status(204).json(product);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
