'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    passport = require('passport'),
    logger = require('mean-logger'),
    problemsController = require('./server/controllers/problems-controller');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Initializing system variables
var config = require('./server/config/config');
var db = mongoose.connect(config.db);

// Bootstrap Models, Dependencies, Routes and the app as an express app
var app = require('./server/config/system/bootstrap')(passport, db);

// Start the app by listening on <port>, optional hostname
app.listen(config.port, config.hostname);
console.log('Mean app started on port ' + config.port + ' (' + process.env.NODE_ENV + ')');

// Initializing logger
logger.init(app, passport, mongoose);

// Expose app
exports = module.exports = app;

// API

// Post problem
app.post('/api/problems', problemsController.create);

// Get problems
app.get('/api/problems', problemsController.list);

// Delete problems
app.delete('/api/problems', problemsController.remove);

