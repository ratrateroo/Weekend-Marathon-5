const User = require('../../models/user');

const Friend = require('../../models/friend');
const { dateToString } = require('../../helpers/date');

const { user } = require('./merge');

module.exports = {
	friends: async () => {
		try {
			const friends = await Friend.find();
			return friends.map((friend) => {
				return {
					...friend._doc,
					_id: friend._id,
					user: user.bind(this, friend.user),
					friend: user.bind(this, friend.friend),
					createdAt: dateToString(friend._doc.createdAt),
					updatedAt: dateToString(friend._doc.updatedAt),
				};
			});
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
			createdAt: dateToString(result._doc.createdAt),
			updatedAt: dateToString(result._doc.updatedAt),
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
