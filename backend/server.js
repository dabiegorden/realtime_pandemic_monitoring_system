// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./db");

// contact routes
const contactRoutes = require("./contacts");

// subscription route
const subscriptionRoutes = require("./subscribe");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(cors({ origin: "http://localhost:3000" }));

// use the contact routes
app.use("/api", contactRoutes);

// subscription routes
app.use("/api", subscriptionRoutes);

// Server listens on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
