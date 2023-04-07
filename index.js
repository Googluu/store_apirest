const express = require("express");

const routerApi = require("./app/server");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

routerApi(app);

// app.get("/users", (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.send("No hay parametros");
//   }
// });

// app.get("/categories/:categoryId/products/:productId", (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });

app.listen(port, () => {
  console.log("listening on port");
});
