var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
	// get a page from the DB
});

router.put('/', function(req, res) {
	// store a new page
});

router.post('/:id', function(req, res) {
	// update a stored page
});

router.delete('/:id', function(req, res) {
	// delete a page
});

module.exports = router;