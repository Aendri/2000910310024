const express = require('express');
const app = express();
const port = 5000;

// Define your API routes here
app.get('/api/trains', (req, res) => {
  // Replace this with your actual implementation to fetch train data from your database or external API
  const trains = [
    { id: 1, name: 'Train 1', price: 100, seats: 50, departureTime: '2023-07-23T10:00:00' },
    { id: 2, name: 'Train 2', price: 150, seats: 30, departureTime: '2023-07-23T11:00:00' },
    { id: 3, name: 'Train 3', price: 120, seats: 40, departureTime: '2023-07-23T12:00:00' },
  ];

  res.json(trains);
});

app.get('/api/trains/:id', (req, res) => {
  // Replace this with your actual implementation to fetch a single train by ID from your database or external API
  const train = { id: 1, name: 'Train 1', price: 100, seats: 50, departureTime: '2023-07-23T10:00:00' };

  res.json(train);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
