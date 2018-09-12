const gql = require('graphql-tag');

module.exports = gql`
  scalar JSON

  type Author {
    id: String
    name: String
    url: String
  }

  type Post {
    authors: [Author]
    tags: [Tag]
    date_added: String
    date_published: String
    title: String
    type: String
    url: String
  }

  type SearchResult {
    id: String
    name: String
    type: String
  }

  type Tag {
    id: String
    name: String
    url: String
  }

  type AllPosts {
    count: Int
    posts: [Post]
  }

  type Query {
    author(id: String!): Author
    posts(
      limit: Int!
      offset: Int!
      author: String
      language: String
      tag: String
    ): AllPosts
    search(q: String!): [SearchResult]
    tag(id: String!): Tag
  }
`;
