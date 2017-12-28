/* <------------------------------------------------------------------> */

// setup for connection database

// node modules to request
var pg = require('pg');

// you have to pick the database to connect to;
var dbUrl = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
	database: 'animal_app',
	host: 'localhost',
	port: 5432,
};

// creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

// officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */
var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.get('/api/animals', (req, res) => {
	pgClient.query("SELECT * FROM animals", (err, resAnimals) => {
		console.log(resAnimals);
		if (err) {
			res.json(err);
		} else {
			res.json(resAnimals.rows);
		}
	});
});

router.get('api/reptilia', (req, res) => {
	pgClient.query("SELECT * FROM amphibia WHERE class='Reptilia'", (err, resAmphibia) => {
		console.log(resAmphibia); // shows reptila in terminal
		if (err) {
			res.json(err);
		} else {
			res.json(resAmphibia.rows);
		}
	});
});

router.get('api/amphibia', (req, res) => {
	pgClient.query("SELECT * FROM amphibia WHERE class='Amphibia'", (err, resAmphibia) => {
		console.log(resAmphibia); // shows reptila in terminal
		if (err) {
			res.json(err);
		} else {
			res.json(resAmphibia.rows);
		}
	});
});

router.get('/api/arachnida', (req, res) => {
	pgClient.query("SELECT * FROM arachnida WHERE class='Arachnida'", (err, resArachnida) => {
		console.log(resArachnida); // shows reptila in terminal
		if (err) {
			res.json(err);
		} else {
			res.json(resArachnida.row);
		}
	});
});

module.exports = router;
