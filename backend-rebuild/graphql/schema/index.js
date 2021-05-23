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
    
    createAt: String!
    updateAt: String!
}

input UserInput {
    username: String!
    email: String!
    password: String
    firstname: String!
    middlename: String!
    lastname: String!
}





type RootQuery {
    users: [User!]!
    
}

type RootMutation {
    createUser(userInput: UserInput): User
    }

schema {
    query: RootQuery
    mutation: RootMutation
}


`);
