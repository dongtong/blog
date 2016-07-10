var express = require('express');
var logger = require('morgan');

// initialize app
var app = express();

// middlewares
app.use(express.static('public'));
app.use(logger('combined'));

// custom middleware
// redirect function
app.use(function(req, res, next) {
    req.url = '/';
    next();
});

// routes
// ...