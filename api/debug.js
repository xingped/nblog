var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send({msg: 'debug'});
});

router.post('/', function(req, res) {
	res.send(req.body);
});

module.exports = router;