const { config } = require("../config/config");

const USER = encodeURIComponent(config.dbMysql.dbUser);
const PASSWORD = encodeURIComponent(config.dbMysql.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbMysql.dbHost}:${config.dbMysql.dbPort}/${config.dbMysql.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: "mysql",
  },
  production: {
    url: URI,
    dialect: "mysql",
  },
};
