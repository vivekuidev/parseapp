var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

// Setup server.
http.createServer(app).listen(4000,  () => {
    console.log('Magic is happening on port 8081');
});
var indexRouter = require('./api/index');
app.use('/api', require('./api'));
app.use('/', indexRouter);