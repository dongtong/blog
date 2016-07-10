var express = require('express');
var logger = require('morgan');

var app = express();
var apiRouter = express.Router();

function hello(req, res, next) {
    console.log('Hello...');
    next();
}

function bye(req, res, next) {
    console.log('Bye...');
    res.end();
}

apiRouter.use(logger);

//app.use(hello, bye);

app.get('/hello', apiRouter);

app.use(hello, bye);

app.listen(3000, function() {
    console.log('middlewares app listening port at 3000');
});