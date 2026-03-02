const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>CI/CD Pipeline - Advanced</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: white;
      }

      .card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        padding: 40px;
        border-radius: 15px;
        text-align: center;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      }

      h1 {
        margin-bottom: 10px;
      }

      .status {
        margin-top: 20px;
        padding: 10px;
        border-radius: 8px;
        background-color: #28a745;
        font-weight: bold;
      }

      .info {
        margin-top: 20px;
        font-size: 14px;
        opacity: 0.9;
      }

      .footer {
        margin-top: 30px;
        font-size: 12px;
        opacity: 0.7;
      }

      button {
        margin-top: 20px;
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        background-color: #ffffff;
        color: #333;
        cursor: pointer;
        font-weight: bold;
        transition: 0.3s;
      }

      button:hover {
        background-color: #ddd;
      }
    </style>
  </head>

  <body>
    <div class="card">
      <h1>🚀 CI/CD Pipeline Active</h1>
      <p>Docker + GitHub Actions + Render Deployment</p>

      <div class="status">
        ✅ Application Running Successfully
      </div>

      <div class="info">
        <p><strong>Container:</strong> Docker</p>
        <p><strong>CI Tool:</strong> GitHub Actions</p>
        <p><strong>Cloud:</strong> Render</p>
      </div>

      <button onclick="alert('Pipeline is Working Perfectly!')">
        Check Status
      </button>

      <div class="footer">
        Developed by Krishna Patil | Lab Assignment 6
      </div>
    </div>
  </body>
  </html>
  `);
});

module.exports = app;
