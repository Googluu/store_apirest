const express = require("express");

const ProductsService = require("../services/products.service");

const router = express.Router();
const service = new ProductsService();

router.get("/", async (req, res) => {
  const products = await service.findAll();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Created",
    data: body,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Updated",
    body,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(204).json({
    message: "Deleted",
    id,
  });
});

module.exports = router;
