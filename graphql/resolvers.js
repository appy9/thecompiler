const GraphQLJSON = require('graphql-type-json');

const {findPosts} = require('../controllers/posts');
const {version} = require('../package.json');

const Query = {
  allPosts: (root, args, context, info) => findPosts(args),
  version: () => version
};

const Mutation = {};

const JSON = GraphQLJSON;

module.exports = {JSON, Mutation, Query};
