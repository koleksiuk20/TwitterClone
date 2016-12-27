'use strict'

// import Express library
var express = require('express');
var app = express();

app.get('/', function(reg, res) { // GET request
	res.send('Hello World');
});

app.listen(8080, function() { // listening on port 8080
	console.log('Web server listening on port 8080');
});