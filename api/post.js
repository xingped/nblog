var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
	// get a single post
});

router.get('/', function(req, res) {
	// get a set of posts
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