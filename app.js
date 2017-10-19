'use strict';
// REQUIRE MODULES
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const quantity = require('./api/quantity');
const recipe = require('./api/recipe');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//mount routes

app.use('/api/v1/quantity', quantity);
app.use('/api/v1/recipe', recipe);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
