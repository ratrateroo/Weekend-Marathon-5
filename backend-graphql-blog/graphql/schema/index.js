const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    firstname: String!
    middlename: String!
    lastname: String!
    blogs: [Blog!]
    friends: [User!]
    createdAt: String!
    updatedAt: String!
}

type Blog {
    title: String!
    content: String!
    comments: [Commemnt!]
    likes: Int!
    createdAt: String!
    updatedAt: String!
    image: String!
    author: User!
}

type Comment {
    comment: String!
    author: User!
    createdAt: String!
    updatedAt: String!
}

`);
