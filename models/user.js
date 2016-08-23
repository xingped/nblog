var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	email: String,
	joinDate: Date
});

module.exports = mongoose.model('User', userSchema);