const express = require("express");

const createRandomProducts = require("../../data_faker/products_faker");

const router = express.Router();

router.get("/", (req, res) => {
  const { size } = req.query;
  const products = [];
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push(createRandomProducts());
  }
  res.json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "product 2",
    price: 1000,
  });
});

router.post("/", (req, res) => {
  const body = req.body;
  res.json({
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
  res.json({
    message: "Deleted",
    id,
  });
});

module.exports = router;
