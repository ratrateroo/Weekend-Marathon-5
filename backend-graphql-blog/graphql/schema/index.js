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
    _id: ID!
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
    _id: ID!
    comment: String!
    author: User!
    createdAt: String!
    updatedAt: String!
}

input UserInput {
    username: String!
    email: String!
    password: String
    firstname: String!
    middlename: String!
    lastname: String!
}

input BlogInput {
    title: String!
    content: String!    
    likes: Int!    
    image: String!
    
}

type RootMutation {
    createUser(userInput: UserInput): User
    createBlog(blogInput: BlogInput): Blog
}

`);
