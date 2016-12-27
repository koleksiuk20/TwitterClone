'use strict'

// import Express library
var mysql = require('mysql');
var express = require('express');
var app = express();
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'vagrant',
	password: '',
	database: 'twitter'
});

connection.connect(function(err) {
	if(err) {
		console.log(err);
		return;
	}

  console.log('Connected to the database');

  app.listen(8080, function() {
  	console.log('Web server is listening on port 8080');
  });
});

app.set('views', '../views');
app.set('view engine', 'ejs');

app.use(express.static('..'));

app.get('/', function(reg, res) { // GET request
	res.render('tweets');
});

app.post('/tweets/create', function(reg, res) {
	res.send('Creating tweet.');
});