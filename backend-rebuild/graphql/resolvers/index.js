const authResolver = require('./auth');
const blogsResolver = require('./blogs');
const friendResolver = require('./friend');

const rootResolver = {
	...authResolver,
	...blogsResolver,
	...friendResolver,
};

module.exports = rootResolver;
