var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.get('/:id', function(req, res) {
	// get a single post
	Post.findOne({_id: req.query.id})
		.exec(function(err, data) {
			if(data.rows.length === 1) {
				res.send(data);
			} else if(data.rows.length === 0) {
				res.status(404).end();
			} else if(data.rows.length > 1) {
				res.status(500).end();
			}
		});
});

router.get('/', function(req, res) {
	// get a set of posts
	if(!req.query.search) {
		Post.find({})
			.exec(function(err, data) {
				res.send(data);
			});
	} else {
		Post.find(
				{ $text: { $search: req.query.search } },
				{ score: { $meta: 'textScore' } }
			).sort({ score: { $meta: 'textScore' } })
			.exec(function(err, data) {
				res.send(data);
			});
	}
});

router.put('/', function(req, res) {
	// store new post

});

router.post('/:id', function(req, res) {
	// update stored post
	
});

router.delete('/:id', function(req, res) {
	// delete stored post
});

module.exports = router;