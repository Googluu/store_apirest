const express = require("express");

const createRandomProducts = require("./data_faker/products_faker");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/products", (req, res) => {
  const { size } = req.query;
  const products = [];
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push(createRandomProducts());
  }
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "product 2",
    price: 1000,
  });
});

app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("No hay parametros");
  }
});

app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log("listening on port");
});
