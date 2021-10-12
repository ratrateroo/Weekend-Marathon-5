const User = require('../../models/user');
const Blog = require('../../models/blog');

const blogs = async (blogIds) => {
	try {
		const blogs = await Blog.find({ _id: { $in: blogIds } });
		return blogs.map((blog) => {
			return transformBlog(blog);
		});
	} catch (err) {
		throw err;
	}
};

const user = async (userId) => {
	try {
		const user = await User.findById(userId);
		return {
			...user._doc,
			_id: user.id,
			createdBlog: blogs.bind(this, user._doc.createdBlog),
		};
	} catch (err) {
		throw err;
	}
};

const transformBlog = (blog) => {
	return {
		...blog._doc,
		_id: blog._doc._id.toString(),
		author: user.bind(this, blog.author),
	};
};

exports.transformBlog = transformBlog;
exports.user = user;
exports.blogs = blogs;
