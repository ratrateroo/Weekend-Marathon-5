const User = require('../../models/user');
const Blog = require('../../models/blog');

const { user, blogs } = require('./merge');

module.exports = {
	blogs: async () => {
		try {
			const blogs = await Blog.find();
			return blogs.map((blog) => {
				return transformBlog(blog);
			});
		} catch (err) {
			throw err;
		}
	},

	createBlog: async (args) => {
		const blog = new Blog({
			title: args.blogInput.title,
			content: args.blogInput.content,
			author: '60b107f56b993e2cc44ba7f6',
		});

		let createdBlog;

		try {
			const result = await blog.save();
			createdBlog = {
				...result._doc,
				_id: result._doc._id.toString(),
				author: user.bind(this, blog.author),
			};
			const author = await User.findById('60b107f56b993e2cc44ba7f6');
			if (!user) {
				throw new Error('User not found.');
			}

			author.createdBlogs.push(blog);
			await author.save();

			return createdBlog;
		} catch (err) {
			throw err;
		}
	},
};
