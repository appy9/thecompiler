const _ = require('lodash');

const posts = require('../data/posts.json');

const postLength = posts.length;

const findPosts = ({limit = 10, offset = 0}) => {
  const desiredPosts = _.slice(posts, offset, offset + limit);

  console.log(desiredPosts);

  return {count: postLength, posts: desiredPosts};
};

module.exports = {
  findPosts
};
