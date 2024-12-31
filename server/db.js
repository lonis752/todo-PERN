const Pool = require("pg").Pool;
const pw = process.env.password;

const pool = new Pool({
  user: "lonisk",
  password: pw,
  host: "localhost",
  port: 5432,
  database: "todopern",
});

module.exports = pool;
