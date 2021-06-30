const User = require('../../models/user');
const Blog = require('../../models/blog');

const { user, transformBlog } = require('./merge');

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

	createBlog: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('Unauthenticated!');
		}

		const blog = new Blog({
			title: args.blogInput.title,
			content: args.blogInput.content,
			author: '60b107f56b993e2cc44ba7f6',
		});

		let createdBlog;

		try {
			const result = await blog.save();
			createdBlog = transformBlog(result);
		} catch (err) {
			throw err;
		}
	},
};
