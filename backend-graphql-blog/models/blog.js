//  title: String!
//     content: String!
//     comments: [Commemnt!]
//     likes: Int!
//     createdAt: String!
//     updatedAt: String!
//     image: String!
//     author: User!

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema(
	{
		title: {
			title: String,
			required: true,
		},
		content: {
			title: String,
			required: true,
		},
		comments: {
			type: Schema.Types.ObjectId,
			ref: 'Comment',
		},
		likes: {
			title: Number,
			required: true,
		},
		imgage: {
			title: String,
			required: true,
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model('Blog', blogSchema);
