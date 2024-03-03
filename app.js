const express = require('express');
const cors = require('cors');
//const globalErrorHandler = require('./app/middlewares/globalErrorHandler');
//const routes = require('./app/routes/index');
const httpStatus = require('http-status');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(cookieParser());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
//app.use('/api/v1', routes);

// Testing
app.get('/', async (req, res) => {
  res.send('Working Successfully');
});

// Global error handler
//app.use(globalErrorHandler);

// Handle not found
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

module.exports = app;
