// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./db");
const { trainModel, predictFuturePandemic } = require("./model/model");

// contact routes
const contactRoutes = require("./contacts");

// subscription route
const subscriptionRoutes = require("./subscribe");

// Pandemics Routes
const pandemics = require("./pandemics");

// Cases route
const cases = require("./cases");

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

// use the cases routes
app.use("/api/pandemic_cases", cases);

// Route to train the model
app.post("/api/pandemics/train", async (req, res) => {
  try {
    const model = await trainModel(); // Train the model with the data
    res.status(200).json({ message: "Model trained successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error training model", error: error.message });
  }
});

// Route to predict the year of the next pandemic
app.post("/api/pandemics/predict", async (req, res) => {
  try {
    const { startYear, duration, deathToll, population } = req.body;

    // Prepare input data for prediction
    const inputData = [startYear, duration, deathToll, population];

    // Train the model (in a real-world app, you would load the pre-trained model instead of retraining it each time)
    const model = await trainModel(); // In a production app, load the model from a file instead
    const predictedYear = predictFuturePandemic(model, inputData);

    res.status(200).json({ predictedYear: predictedYear });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Prediction failed", error: error.message });
  }
});

// Server listens on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
