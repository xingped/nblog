var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	body: {
		type: String,
		required: true
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	createDate: {
		type: Date,
		required: true,
		default: Date.now
	},
	editDate: {
		type: Date
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
});

commentSchema.pre('find', function(next) {
	this.populate('comments');
	next();
});

module.exports = mongoose.model('Comment', commentSchema);