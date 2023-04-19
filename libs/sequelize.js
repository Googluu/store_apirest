const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupModels = require("../db/models");

const USER = encodeURIComponent(config.dbPostgres.dbUser);
const PASSWORD = encodeURIComponent(config.dbPostgres.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbPostgres.dbHost}:${config.dbPostgres.dbPort}/${config.dbPostgres.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: true,
  // dialectModule: require("mysql2"),
});

setupModels(sequelize);

module.exports = sequelize;
