const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const Blog = require('../../models/blog');
const Friend = require('../../models/friend');

const blogs = async (blogIds) => {
	try {
		const blogs = await Blog.find({ _id: { $in: blogIds } });
		return blogs.map((blog) => {
			return {
				...blog._doc,
				_id: blog.id,
				author: user.bind(this, blog.author),
			};
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
	blogs: async () => {
		try {
			const blog = Blog.find();
			return blogs.map((blog) => {
				return {
					...blog._doc,
					_id: blog.id,
					author: user.bind(this, blog._doc.author),
				};
			});
		} catch (err) {
			throw err;
		}
	},

	friends: async () => {
		try {
			const friends = await Friend.find();
			return friends.map((friend) => {
				return {
					...friend._doc,
					_id: friend._id,
					user: user.bind(this, friend.user),
					friend: user.bind(this, friend.friend),
					createdAt: new Date(friend._doc.createdAt).toISOString(),
					updatedAt: new Date(friend._doc.updatedAt).toISOString(),
				};
			});
		} catch (err) {
			throw err;
		}
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
	addFriend: async (args) => {
		const fetchedUser = await User.findOne({ _id: args.friendId });

		const friend = new Friend({
			user: '60b107f56b993e2cc44ba7f6',
			friend: fetchedUser,
		});

		const result = await friend.save();

		return {
			...result._doc,
			_id: result.id,
			user: user.bind(this, friend.user),
			friend: user.bind(this, friend.friend),
			createdAt: new Date(result._doc.createdAt).toISOString(),
			updatedAt: new Date(result._doc.updatedAt).toISOString(),
		};
	},
	removeFriend: async (args) => {
		try {
			const friend = await Friend.findById(args.friendId).populate('friend');
			const foundFriend = {
				...friend.friend,
				_id: friend.friend.id,
				user: user.bind(this, friend.user),
			};
			await Friend.deleteOne({ _id: args.friendId });
			return foundFriend;
		} catch (err) {
			throw err;
		}
	},
};
