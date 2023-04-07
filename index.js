const express = require("express");

const routerApi = require("./app/server");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

routerApi(app);

app.listen(port, () => {
  console.log("listening on port");
});
