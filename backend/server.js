const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const app = express();
// const { trainModel, predictFuturePandemic } = require("./model/model");
require("dotenv").config();

const contactRoutes = require("./contacts");
const subscriptionRoutes = require("./subscribe");
const pandemics = require("./pandemics");
const cases = require("./cases");
const authRoutes = require("./auth");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribe", subscriptionRoutes);
app.use("/api/pandemics", pandemics);
app.use("/api/pandemic_cases", cases);
app.use("/api/auth", authRoutes);

// Route to train the model
// app.post("/api/pandemics/train", async (req, res) => {
//   try {
//     const model = await trainModel();
//     res.status(200).json({ message: "Model trained successfully!" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error training model", error: error.message });
//   }
// });

// Route to predict the year of the next pandemic
// app.post("/api/pandemics/predict", async (req, res) => {
//   try {
//     const { startYear, duration, deathToll, population } = req.body;

//     const inputData = [startYear, duration, deathToll, population];

//     const model = await trainModel();
//     const predictedYear = predictFuturePandemic(model, inputData);

//     res.status(200).json({ predictedYear: predictedYear });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Prediction failed", error: error.message });
//   }
// });

// Server listens on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
