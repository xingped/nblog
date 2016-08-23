var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	body: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	createDate: Date,
	editDate: Date,
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

commentSchema.pre('find', function(next) {
	this.populate('comments');
	next();
});

module.exports = mongoose.model('Comment', commentSchema);