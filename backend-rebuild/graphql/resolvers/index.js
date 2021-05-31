const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const Blog = require('../../models/blog');

const blogs = (blogIds) => {
	return Blog.find({ _id: { $in: blogIds } })
		.then((blogs) => {
			return blogs.map((blog) => {
				return {
					...blog._doc,
					_id: blog.id,
					author: user.bind(this, blog.author),
				};
			});
		})
		.catch((err) => {
			throw err;
		});
};

const user = (userId) => {
	return User.findById(userId)
		.then((user) => {
			return {
				...user._doc,
				_id: user.id,
				createdBlogs: blogs.bind(this, user._doc.createdBlogs),
			};
		})
		.catch((err) => {
			throw err;
		});
};

module.exports = {
	users: () => {
		return User.find()
			.populate('createdBlogs')
			.then((users) => {
				return users.map((user) => {
					return { ...user._doc, _id: user._doc._id.toString() };
				});
			})
			.catch((err) => {
				throw err;
			});
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
	createBlog: (args) => {
		const blog = new Blog({
			title: args.blogInput.title,
			content: args.blogInput.content,
			author: '60b107f56b993e2cc44ba7f6',
		});

		let createdBlog;
		return blog
			.save()
			.then((result) => {
				createdBlog = {
					...result._doc,
					_id: result._doc._id.toString(),
					author: user.bind(this, blog.author),
				};
				return User.findById('60b107f56b993e2cc44ba7f6');
			})
			.then((user) => {
				if (!user) {
					throw new Error('User not found.');
				}
				user.createdBlogs.push(blog);
				return user.save();
			})
			.then((result) => {
				return createdBlog;
			})
			.catch((err) => {
				console.log(err);
				throw err;
			});
	},
};
