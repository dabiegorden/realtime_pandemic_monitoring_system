// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "pandemic_monitoring",
  port: process.env.DB_PORT || 3306,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the MySQL database:", err);
    return;
  }
  console.log("Connected to the MySQL database successfully!");
});

// Example route to test database connection
app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Server listens on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
