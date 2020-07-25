const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "humblesam",
  database: "test",
  connectionLimit: 5,
});

module.exports = pool;
