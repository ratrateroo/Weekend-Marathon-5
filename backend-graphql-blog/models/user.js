const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	firstname: {
		type: String,
		required: true,
	},
	middlename: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},

	createdBlogs: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Blog',
		},
	],
	friends: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
});

module.exports = mongoose.model('User', userSchema);
