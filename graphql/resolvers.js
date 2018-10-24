const GraphQLJSON = require('graphql-type-json');

const {
  getAuthor,
  getPosts,
  getSearchResults,
  getTag
} = require('../controllers');

const JSON = GraphQLJSON;

const Query = {
  author: (root, args, context, info) => getAuthor(args),
  posts: (root, args, context, info) => getPosts(args),
  search: (root, args, context, info) => getSearchResults(args),
  tag: (root, args, context, info) => getTag(args)
};

module.exports = {JSON, Query};
