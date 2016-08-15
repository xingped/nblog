var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var knex = require('knex')({
	client: 'pg',
	connection: process.env.DATABASE_URL
});

// Set up globals for each request
app.use(function(req, res, next) {
	req.db = knex;
	next();
});

// pre-empt requests for admin static files
app.use(function(req, res, next) {
	console.log('middleware, route: '+req.originalUrl);
	if(req.originalUrl.indexOf('/views/admin/') === 0) {
		// check if user is permitted to access admin routes
		console.log('this is an admin route');
		res.status(403).end();
	} else {
		next();
	}
});

// set static assets directory
app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.json()); // for parsing application/json

// app.use('/api/test', require('./api/test'));

// load all api routes
var files = fs.readdirSync('./api');
for(var i = 0; i < files.length; i++) {
	if(fs.statSync('./api/'+files[i]).isFile()) {
		var route = '/api/'+files[i].substr(0,files[i].length-3);
		app.use(route, require('./api/'+files[i]));
	}
}

app.listen(3000);