// File: server.js
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 4001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usec",
});

app.post("/submit-form", (req, res) => {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS test1 (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(10) NOT NULL,
      message TEXT NOT NULL
    )
  `;
  connection.query(createTableSQL, (err) => {
    if (err) {
      console.error("Lỗi tạo bảng MySQL:", err);
      res.status(500).json({ error: "Lỗi Nội Bộ của Server" });
    } else {
      console.log("Bảng đã tồn tại hoặc được tạo mới");

      const { email, phone, message } = req.body;

      const insertDataSQL = "INSERT INTO test1 (email, phone, message) VALUES (?, ?, ?)";
      connection.query(insertDataSQL, [email, phone, message], (err, result) => {
        if (err) {
          console.error("Lỗi chèn dữ liệu vào MySQL:", err);
          res.status(500).json({ error: "Lỗi Nội Bộ của Server" });
        } else {
          console.log("Dữ liệu chèn thành công");
          res.status(200).json({ success: true });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${port}`);
});
