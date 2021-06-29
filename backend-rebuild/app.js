const express = require('express');

const { graphqlHTTP } = require('express-graphql');

const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');

const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(isAuth);

app.use(
	'/graphql',
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
		app.listen(3000);
	})
	.catch((error) => {
		console.log(error);
	});
