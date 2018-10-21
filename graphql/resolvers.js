const GraphQLJSON = require('graphql-type-json');

const {getPosts, getSearchResults} = require('../controllers');

const JSON = GraphQLJSON;

const Query = {
  posts: (root, args, context, info) => getPosts(args),
  search: (root, args, context, info) => getSearchResults(args)
};

module.exports = {JSON, Query};
