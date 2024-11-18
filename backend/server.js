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

// Pandemics Routes
const pandemics = require("./pandemics");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS
app.use(cors({ origin: "http://localhost:3000" }));

// use the contact routes
app.use("/api/contacts", contactRoutes);

// subscription routes
app.use("/api/subscriptions", subscriptionRoutes);

// use the pandemic data routes
app.use("/api/pandemics", pandemics);

// Server listens on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
