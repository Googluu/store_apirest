const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupModels = require("../db/models");

const sequelize = new Sequelize(config.uriPostgres, {
  dialect: "postgres",
  logging: true,
  // dialectModule: require("mysql2"),
});

setupModels(sequelize);

module.exports = sequelize;
