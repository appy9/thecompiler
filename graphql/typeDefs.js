const gql = require('graphql-tag');

module.exports = gql`
  scalar JSON

  type Post {
    authors: [String]
    date_published: String
    tags: [String]
    title: String
    url: String
  }

  type SearchResult {
    id: String
    name: String
    type: String
  }

  type AllPosts {
    count: Int
    posts: [Post]
  }

  type Query {
    posts(limit: Int!, offset: Int!, author: String, tag: String): AllPosts
    search(q: String!): [SearchResult]
  }
`;
