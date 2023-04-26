const { config } = require("../config/config");

module.exports = {
  development: {
    url: config.uriPostgres,
    dialect: "postgres",
  },
  production: {
    url: config.uriPostgres,
    dialect: "postgres",
  },
};
