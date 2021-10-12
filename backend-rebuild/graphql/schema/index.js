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
    createdBlogs: [Blog!]
    createAt: String!
    updateAt: String!
    profileimage: String!
}

type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

type Blog {
    _id: ID!
    title: String!
    content: String!    
    createdAt: String!
    updatedAt: String!
    
    author: User!
}

type Friend {
    _id: ID!
    friend: User!
    user: User!
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
    
}





type RootQuery {
    user(id: ID!): User!
    users: [User!]!
    blogs: [Blog!]!
    friends: [Friend!]!
    login(username: String!, password: String!): AuthData!

    
    
    
}

type RootMutation {
    createUser(userInput: UserInput): AuthData!
    createBlog(blogInput: BlogInput): Blog
    addFriend(friendId: ID!): Friend!
    removeFriend(friendId: ID!): Friend!
    }

schema {
    query: RootQuery
    mutation: RootMutation
}


`);
