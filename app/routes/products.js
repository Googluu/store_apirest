const express = require("express");

const ProductsService = require("../services/products.service");

const router = express.Router();
const service = new ProductsService();

router.get("/", (req, res) => {
  const products = service.findAll();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updateProduct = await service.update(id, body);
  res.json(updateProduct);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.status(204).json(product);
});

module.exports = router;
