require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  isProd: process.env.NODE_ENV === "production",
  isDev: process.env.NODE_ENV === "development",
  port: process.env.PORT || 3000,
  uriPostgres: process.env.URI_POSTGRES,
  apikey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  nodeMailerUser: process.env.NODE_MAILER_AUTH_USER,
  nodeMailerPass: process.env.NODE_MAILER_AUTH_PASS,
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
