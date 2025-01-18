// netlify/functions/deviceCounter.js
const cors = require('cors');
const express = require('express');

// Použij Express v rámci serverless funkce
const app = express();
app.use(cors());

// Data pro sledování
let deviceCount = {
  android: 0,
  ios: 0,
  windows: 0,
  other: 0,
};

app.get('/device-counter', (req, res) => {
  const userAgent = req.headers['user-agent'].toLowerCase();
  if (userAgent.includes('android')) {
    deviceCount.android += 1;
  } else if (userAgent.includes('iphone') || userAgent.includes('ipod')) {
    deviceCount.ios += 1;
  } else if (userAgent.includes('windows')) {
    deviceCount.windows += 1;
  } else {
    deviceCount.other += 1;
  }

  res.json(deviceCount);
});

// Export funkce pro Netlify
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'API is working', data: deviceCount }),
  };
};
