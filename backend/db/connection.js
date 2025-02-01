const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clickfit",
});

db.connect((err) => {
  if (err) console.error("Erreur de connexion:", err.message);
  else console.log("Connecté à MySQL");
});

module.exports = db;
