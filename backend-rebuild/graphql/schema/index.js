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
    createAt: String!
    updateAt: String!
}

type Blog {
    _id: ID!
    title: String!
    content: String!
    
    
    createdAt: String!
    updatedAt: String!
    
    author: User!
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
    
}




type RootQuery {
    users: [User!]!
    
}

type RootMutation {
    createUser(userInput: UserInput): User
    createBlog(blogInput: BlogInput): Blog
    }

schema {
    query: RootQuery
    mutation: RootMutation
}


`);
