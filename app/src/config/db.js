const mysql = require("mysql");

const db = mysql.createConnection({
  host: "hankyung-project.ckb8qirnyrnb.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "tkdwls1!",
  database: "hankyung_project",
});

db.connect();

module.exports = db;