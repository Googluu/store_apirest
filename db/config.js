const { config } = require("../config/config");

const USER = encodeURIComponent(config.dbPostgres.dbUser);
const PASSWORD = encodeURIComponent(config.dbPostgres.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbPostgres.dbHost}:${config.dbPostgres.dbPort}/${config.dbPostgres.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: "postgres",
  },
  production: {
    url: URI,
    dialect: "postgres",
  },
};
