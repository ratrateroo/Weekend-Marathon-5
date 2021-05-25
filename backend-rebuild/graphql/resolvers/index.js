const bcrypt = require('bcryptjs');

const User = require('../../models/user');

module.exports = {
	users: () => {
		return User.find()
			.then((users) => {
				return users.map((user) => {
					return { ...user._doc, _id: user._doc._id.toString() };
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
};
