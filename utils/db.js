const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "easyoffer",
  database: "easy"
});

db.connect(err => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
  }
  else {
    console.log("Connected to MySQL database.");
  }
});

module.exports = db;
