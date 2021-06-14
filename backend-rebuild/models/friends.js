const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendsSchema = new Schema(
	{
		friend: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Friend', friendsSchema);
