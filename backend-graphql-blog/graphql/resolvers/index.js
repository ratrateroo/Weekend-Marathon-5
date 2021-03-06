const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const Blog = require('../../models/blog');
const Friend = require('../../models/friends');
const Comment = require('../../models/comments');
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

module.exports = {
	blogs: async () => {
		try {
			const blogs = await Blog.find();
			return blogs.map((blog) => {
				return {
					...blog._doc,
					_id: blog.id,
					title: blog._doc.title,
					author: user.bind(this.blog._doc.author),
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
					_id: friend.id,
					user: user.bind(this, friend._doc.user),
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
			//likes: args.blogInput.likes,
			image: args.blogInput.image,
			author: 'useridgoeshere',
		});
		let createdBlog;
		try {
			const result = await blog.save();
			createdBlog = {
				...result._doc,
				_id: result._doc._id.toString(),
				author: user.bind(this, result._doc.author),
			};

			const author = await User.findById('useridgoeshere');

			if (!author) {
				throw new Error('User not found.');
			}

			author.createBlog.push(blog);
			await author.save();

			return createdBlog;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	createComment: async (args) => {
		const comment = new Comment({
			comment: args.commentInput.comment,
			author: 'useridgoeshere',
		});
		let createdComment;
		try {
			const result = await comment.save();

			createdComment = {
				...result._doc,
				_id: result._doc._id.toString(),
				author: user.bind(this, result._doc.author),
			};
			const author = await User.findById('useridgoeshere');
			if (!author) {
				throw new Error('User not found.');
			}
			author.createdComment.push(comment);
			await author.save();
			return createdComment;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	addFriend: async (args) => {
		const fetchedFriend = await User.findOne({
			_id: args.friendId,
		});

		const friend = new Friend({
			user: 'idgoeshere',
			friend: fetchedFriend,
		});
		let addedFriend;
		try {
			const result = await friend.save();
			addedFriend = {
				...result._doc,
				_id: result._doc._id.toString(),
				user: user.bind(this, result._doc.creator),
			};

			const user = await User.findById('idgoeshere');

			if (!user) {
				throw new Error('User not found.');
			}

			user.addedFriend.push(friend);
			await user.save();

			return addedFriend;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	removeFriend: async (args) => {
		try {
			const friend = await Friend.findById(args.friendId).populate('friend');
			const unfriended = {
				...friend.friend._doc,
				_id: friend.friend.id,
				user: user.bind(this, friend.friend._doc.creator),
			};
			await Friend.deleteOne({
				_id: args.friendId,
			});
			return unfriended;
		} catch (err) {
			throw err;
		}
	},
};
