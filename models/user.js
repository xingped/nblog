var mongoose = require('mongoose');
var immutablePlugin = require('mongoose-immutable');

var userSchema = mongoose.Schema({
	username: {
		type: String,
		immutable: true
	},
	password: {
		type: String
		min: 64,
		max: 64
	},
	email: {
		type: String,
		required: true
	},
	joinDate: {
		type: Date,
		default: Date.now,
		immutable: true
	}
});

userSchema.plugin(immutablePlugin);

module.exports = mongoose.model('User', userSchema);