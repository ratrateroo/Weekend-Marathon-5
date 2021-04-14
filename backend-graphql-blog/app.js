const express = require('express');

const { graphqlHTTP } = require('express-graphql');

const mongoose = require('mongoose');

const app = express();

//import graphQlSchema
//import gralQlResolvers

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res, next) => {
	res.send('Hello World!');
});

app.listen(3000);
