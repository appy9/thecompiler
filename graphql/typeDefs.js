const gql = require('graphql-tag');

module.exports = gql`
  scalar JSON

  type Post {
    authors: [String]
    categories: [String]
    date_added: String
    date_published: String
    languages: [String]
    title: String
    type: String
    url: String
  }

  type AllPosts {
    count: Int
    posts: [Post]
  }

  type Query {
    allPosts(limit: Int!, offset: Int!): AllPosts
    version: String
  }

  type Mutation {
    TODO: JSON
  }
`;
