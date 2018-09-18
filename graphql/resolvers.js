const GraphQLJSON = require('graphql-type-json');

const {
  getAuthor,
  getAuthors,
  getPosts,
  getSearchResults,
  getTag,
  getTags
} = require('../controllers');

const JSON = GraphQLJSON;

const Query = {
  author: (root, args, context, info) => getAuthor(args),
  posts: (root, args, context, info) => getPosts(args),
  search: (root, args, context, info) => getSearchResults(args),
  tag: (root, args, context, info) => getTag(args)
};

const Post = {
  authors: (root, args, context, info) => getAuthors(root),
  tags: (root, args, context, info) => getTags(root)
};

module.exports = {JSON, Post, Query};
