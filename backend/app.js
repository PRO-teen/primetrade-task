// app.js
const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/', require('./routes/authRoutes'));
app.use('/tasks', require('./routes/taskRoutes')); // CRUD for tasks


// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Something went wrong!',
  });
});


module.exports = app;
