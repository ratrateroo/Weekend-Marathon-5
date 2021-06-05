const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const Blog = require('../../models/blog');

const blogs = async (blogIds) => {
	try {
		const blogs = await Blog.find({ _id: { $in: blogIds } });
		blogs.map((blog) => {
			return {
				...blog._doc,
				_id: blog.id,
				author: user.bind(this, blog.author),
			};
		});
		return blogs;
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
			createdBlogs: blogs.bind(this, user._doc.createdBlogs),
		};
	} catch (err) {
		throw err;
	}
};

module.exports = {
	users: async () => {
		try {
			const users = await User.find();
			return users.map((user) => {
				return { ...user._doc, _id: user._doc._id.toString() };
			});
		} catch (err) {
			throw err;
		}
	},
	blogs: () => {
		return Blog.find()
			.then((blogs) => {
				return blogs.map((blog) => {
					return {
						...blog._doc,
						_id: blog.id,
						author: user.bind(this, blog._doc.author),
					};
				});
			})
			.catch((err) => {
				throw err;
			});
	},

	createUser: async (args) => {
		try {
			const existingUser = await User.findOne({
				email: args.userInput.email,
			});
			if (existingUser) {
				throw new Error('User exists already.');
			}

			const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

			const user = new User({
				username: args.userInput.username,
				email: args.userInput.email,
				password: hashedPassword,
				firstname: args.userInput.firstname,
				middlename: args.userInput.middlename,
				lastname: args.userInput.lastname,
			});
			const result = await user.save();
			return { ...result._doc, password: null, _id: result.id };
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
			await user.save();

			return createdBlog;
		} catch (err) {
			throw err;
		}
	},
};
