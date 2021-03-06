var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
	title: {
		type: String,
		index: true,
		required: true
	},
	body: {
		type: String,
		index: true
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	createDate: {
		type: Date,
		default: Date.now
		required: true
	},
	editDate: {
		type: Date,
		default: Date.now
	},
	publishDate: Date,
	published: {
		type: Boolean,
		default: false
	},
	views: Number,
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	tags: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tag'
	}]
});

postSchema.pre('findOne', function(next) {
	this.populate('comments');
	this.populate('tags');
	next();
});

postSchema.index({ title: 'text', body: 'text' });

module.exports = mongoose.model('Post', postSchema);