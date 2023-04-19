const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupModels = require("../db/models");

const USER = encodeURIComponent(config.dbMysql.dbUser);
const PASSWORD = encodeURIComponent(config.dbMysql.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbMysql.dbHost}:${config.dbMysql.dbPort}/${config.dbMysql.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: "mysql",
  logging: true,
  dialectModule: require("mysql2"),
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
