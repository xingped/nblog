var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	req.db.raw("SELECT * FROM test_table").then(function(data) {
		res.send(data.rows);
	});
});

router.post('/', function(req, res) {
	res.send(req.body);
});

module.exports = router;