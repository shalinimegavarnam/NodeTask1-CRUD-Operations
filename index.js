const express = require("express");
const app = express();
const mongoose = require("mongoose");
const albumRoute = require('./routes/album.route');
const dotenv = require("dotenv");

dotenv.config();

// Importing of Album Model
const Album = require('./models/album.model');

// Middleware to convert the JSON
app.use(express.json());

// Test API
app.get('/testApi', (req, res) => {
  res.send('Hello World');
});

// Route
app.use('/api/albums', albumRoute);

// Listen to port
app.listen(3001);

// MongoDB connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log('Connected!'))
  .catch((error) => console.log('Connection error:', error));
