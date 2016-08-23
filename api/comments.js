var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
	// get a single comment
});

router.get('/', function(req, res) {
	// get a set of comments

});

router.put('/', function(req, res) {
	// store new comment
});

router.post('/:id', function(req, res) {
	// update stored comment
});

router.delete('/:id', function(req, res) {
	// delete stored comment
});

module.exports = router;