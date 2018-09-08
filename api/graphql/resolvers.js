const GraphQLJSON = require('graphql-type-json');

const {
  findAuthor,
  findAuthors,
  findLanguage,
  findLanguages,
  findPosts,
  findTag,
  findTags
} = require('../controllers');

const JSON = GraphQLJSON;

const Query = {
  author: (root, args, context, info) => findAuthor(args),
  language: (root, args, context, info) => findLanguage(args),
  posts: (root, args, context, info) => findPosts(args),
  tag: (root, args, context, info) => findTag(args)
};

const Post = {
  authors: (root, args, context, info) => findAuthors(root),
  languages: (root, args, context, info) => findLanguages(root),
  tags: (root, args, context, info) => findTags(root)
};

module.exports = {JSON, Post, Query};
