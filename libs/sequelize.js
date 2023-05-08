const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupModels = require("../db/models");

const USER = encodeURIComponent(config.dbMysql.dbUser);
const PASSWORD = encodeURIComponent(config.dbMysql.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbMysql.dbHost}:${config.dbMysql.dbPort}/${config.dbMysql.dbName}`;

const options = {
  dialect: "mysql",
  dialectModule: require("mysql2"),
  logging: config.isDev ? console.log : false,
};

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(URI, options);

setupModels(sequelize);

module.exports = sequelize;
