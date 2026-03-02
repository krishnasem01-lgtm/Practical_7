const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD with Docker is Working 🚀. For testing the workflow!!');
});

module.exports = app;
