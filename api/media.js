var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
	// get a stored piece of media's info
});

router.put('/', function(req, res) {
	// store new media
});

router.post('/:id', function(req, res) {
	// update stored media
});

router.delete('/:id', function(req, res) {
	// delete stored media
});

module.exports = router;