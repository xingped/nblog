var mongoose = require('mongoose');
var immutablePlugin = require('mongoose-immutable');

var commentSchema = mongoose.Schema({
	body: {
		type: String,
		required: true
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
		immutable: true
	},
	createDate: {
		type: Date,
		required: true,
		default: Date.now,
		immutable: true
	},
	editDate: {
		type: Date
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
});

commentSchema.plugin(immutablePlugin);

commentSchema.pre('find', function(next) {
	this.populate('comments');
	next();
});

module.exports = mongoose.model('Comment', commentSchema);