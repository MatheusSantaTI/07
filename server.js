const express = require('express');
const app = express();
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');

// Connect to MongoDB
mongoose.connect(dbConfig.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/users', userRoutes);

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// This code sets up an Express server with MongoDB connection, EJS view engine, and user routes.
// It includes middleware for parsing JSON and URL-encoded data, and serves a home page at      