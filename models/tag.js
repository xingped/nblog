var mongoose = require('mongoose');

var tagSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Tag', userSchema);