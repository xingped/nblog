var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
	console.log('test hit');
	next();
});

router.get('/', function(req, res) {
	res.send({msg: 'testing 1, 2, 3...'});
});

module.exports = router;