const express = require('express');

const { graphqlHTTP } = require('express-graphql');

const mongoose = require('mongoose');

//const { GraphQLUpload } = require('graphql-upload');

const graphQlSchema = require('./graphql/schema/index');

const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');

const fileUpload = require('./middleware/file-upload');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS,PATCH');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}
	next();
});

// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
// 	);
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

// 	next();
// });

app.use(isAuth);

app.use(
	'/graphql',
	fileUpload.single('image'),
	graphqlHTTP({
		schema: graphQlSchema,
		rootValue: graphQlResolvers,
		graphiql: true,
	})
);

const url = `mongodb://127.0.0.1:27017/${process.env.MONGO_DB}`;

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Connected to ${process.env.MONGO_DB}`);
		app.listen(8000);
	})
	.catch((error) => {
		console.log(error);
	});
