var dotenv = require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "crisisCenter_DB",
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.JAWSDB_URL,
    password: process.env.JAWSDB_URL,
    database: "database_production",
    host: process.env.JAWSDB_URL,
    dialect: "mysql"
  }
};
