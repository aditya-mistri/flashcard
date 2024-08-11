const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// ... your existing routes ...

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    const [result] = await db.query('SELECT 1');
    console.log('Database connection test successful');
  } catch (error) {
    console.error('Database connection test failed:', error);
  }
});