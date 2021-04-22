const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendsSchema = new Schema({
	friend: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Friends', friendsSchema);
