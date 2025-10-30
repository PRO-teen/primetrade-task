// app.js
const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors');

const app = express();
const allowedOrigins = process.env.FRONTEND_URL.split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);


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
