const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID!,
    username: String!,
    email: String!,
    password: String!,
    savedBooks: [Book]
}

type Book {
    authors: [String],
    description: String!,
    bookId: String!,
    image: String,
    link: String,
    title: String!
}

type Auth {
    token: String
    user: User
}

input saveBook {
    authors: [String],
    description: String
    bookId: String!
    image: String
    link: String
    title: String
}

type Query{
    me(userId: ID!): User
}

type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: saveBook!): Book
    removeBook(bookId: String!): Book
}
`
module.exports = typeDefs