const express = require("express");

const routerApi = require("./app/server");
const { logErrors, errorHandler } = require("./app/middlewares/error.handler");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log("listening on port");
});
