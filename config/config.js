require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  dbPostgres: {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
  },
  dbMysql: {
    dbUser: process.env.DB_MYSQL_USER,
    dbPassword: process.env.DB_MYSQL_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_MYSQL_DATABASE,
    dbPort: process.env.DB_MYSQL_PORT,
  },
};

module.exports = { config };
