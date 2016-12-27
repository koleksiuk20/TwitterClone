'use strict'

// import Express library
var express = require('express');
var app = express();

app.set('views', '../views');
app.set('view engine', 'ejs');

app.use(express.static('..'));

app.get('/', function(reg, res) { // GET request
	res.render('tweets');
});

app.listen(8080, function() { // listening on port 8080
	console.log('Web server listening on port 8080');
});