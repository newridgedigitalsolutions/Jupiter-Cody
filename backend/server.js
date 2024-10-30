require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 6969;

// Enable CORS for frontend origin 
app.use(cors({ origin: 'http://localhost:5173'}))

// Sample endpoint for performance data
app.get('/performance', (req, res) => {
  // Sample response structure; replace with real trading data
  res.json([
    { timestamp: '2024-10-24T10:00:00', action: 'Buy', price: 35000, amount: 0.01 },
    { timestamp: '2024-10-24T12:00:00', action: 'Sell', price: 36000, amount: 0.01 },
  ]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
