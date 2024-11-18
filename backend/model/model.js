const tf = require("@tensorflow/tfjs-node");
const moment = require("moment");

// Sample pandemic data (provided by you)
const pandemics = [
  {
    name: "COVID-19",
    startYear: 2019,
    endYear: null,
    deathToll: "6.9M+",
    recovered: "728M+",
    countriesAffected: "Global",
    population: 7800000000,
  },
  {
    name: "H1N1 (Swine Flu)",
    startYear: 2009,
    endYear: 2010,
    deathToll: "151K-575K",
    recovered: "Unknown",
    countriesAffected: "Global",
    population: 6800000000,
  },
  {
    name: "Spanish Flu",
    startYear: 1918,
    endYear: 1920,
    deathToll: "50M+",
    recovered: "Unknown",
    countriesAffected: "Global",
    population: 1800000000,
  },
  {
    name: "Asian Flu (H2N2)",
    startYear: 1957,
    endYear: 1958,
    deathToll: "1M+",
    recovered: "Unknown",
    countriesAffected: "Global",
    population: 2800000000,
  },
  {
    name: "Hong Kong Flu (H3N2)",
    startYear: 1968,
    endYear: 1970,
    deathToll: "1M+",
    recovered: "Unknown",
    countriesAffected: "Global",
    population: 3600000000,
  },
  {
    name: "Black Death (Bubonic Plague)",
    startYear: 1347,
    endYear: 1351,
    deathToll: "75M+",
    recovered: "Unknown",
    countriesAffected: "Europe, Asia, Africa",
    population: 450000000,
  },
  {
    name: "Third Plague Pandemic",
    startYear: 1855,
    endYear: 1960,
    deathToll: "12M+",
    recovered: "Unknown",
    countriesAffected: "China, India, Global",
    population: 1400000000,
  },
  {
    name: "Russian Flu",
    startYear: 1889,
    endYear: 1890,
    deathToll: "1M+",
    recovered: "Unknown",
    countriesAffected: "Global",
    population: 1500000000,
  },
  {
    name: "First Cholera Pandemic",
    startYear: 1817,
    endYear: 1824,
    deathToll: "Unknown",
    recovered: "Unknown",
    countriesAffected: "Asia, Middle East, India",
    population: null,
  },
  {
    name: "Second Cholera Pandemic",
    startYear: 1829,
    endYear: 1851,
    deathToll: "1M+",
    recovered: "Unknown",
    countriesAffected: "Europe, Americas, Asia",
    population: null,
  },
  {
    name: "HIV/AIDS Pandemic",
    startYear: 1981,
    endYear: null,
    deathToll: "40M+",
    recovered: "Unknown",
    countriesAffected: "Global",
    population: 8000000000,
  },
  {
    name: "SARS (Severe Acute Respiratory Syndrome)",
    startYear: 2002,
    endYear: 2004,
    deathToll: "774",
    recovered: "8K+",
    countriesAffected: "China, Hong Kong, Canada, etc.",
    population: 6500000000,
  },
  {
    name: "MERS (Middle East Respiratory Syndrome)",
    startYear: 2012,
    endYear: null,
    deathToll: "858",
    recovered: "Unknown",
    countriesAffected: "Middle East, Global",
    population: 7000000000,
  },
];

// Helper function to preprocess data
const preprocessData = () => {
  return pandemics.map((pandemic) => {
    const startYear = pandemic.startYear;
    const endYear = pandemic.endYear || moment().year();
    const duration = endYear - startYear;

    let deathToll = parseInt(pandemic.deathToll.replace(/[^\d.-]/g, ""), 10);
    if (pandemic.deathToll.includes("M")) deathToll *= 1000000;
    else if (pandemic.deathToll.includes("K")) deathToll *= 1000;
    deathToll = isNaN(deathToll) ? 0 : deathToll;

    const population = pandemic.population || 0;

    return { startYear, duration, deathToll, population };
  });
};

// Create a TensorFlow model
const createModel = () => {
  const model = tf.sequential();
  model.add(
    tf.layers.dense({ units: 64, activation: "relu", inputShape: [4] })
  );
  model.add(tf.layers.dense({ units: 1 }));
  model.compile({
    optimizer: tf.train.adam(),
    loss: "meanSquaredError",
    metrics: ["mse"],
  });
  return model;
};

// Train the model
const trainModel = async () => {
  const processedData = preprocessData();
  const X = processedData.map((pandemic) => [
    pandemic.startYear,
    pandemic.duration,
    pandemic.deathToll,
    pandemic.population,
  ]);
  const y = processedData.map((pandemic) => pandemic.startYear);

  const inputTensor = tf.tensor2d(X);
  const outputTensor = tf.tensor1d(y);

  const model = createModel();
  await model.fit(inputTensor, outputTensor, {
    epochs: 100,
    batchSize: 4,
    validationSplit: 0.2,
    callbacks: {
      onEpochEnd: (epoch, logs) =>
        console.log(`Epoch ${epoch + 1}: loss = ${logs.loss}`),
    },
  });

  return model;
};

// Predict the future pandemic year
const predictFuturePandemic = (model, inputData) => {
  const prediction = model.predict(tf.tensor2d([inputData], [1, 4]));
  return prediction.dataSync()[0]; // Predicted year
};

// Export the functions to use in other parts of the app
module.exports = { trainModel, predictFuturePandemic };
