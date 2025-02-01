const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hamid@1231123",
  database: "clickfit",
});

db.connect((err) => {
  if (err) console.error("Connection Error:", err.message);
  else console.log("Connected to MySQL");
});

module.exports = db;
