const _filter = require('lodash/filter');
const _includes = require('lodash/includes');
const _slice = require('lodash/slice');
const matchSorter = require('match-sorter');

const authorIds = require('../data/authorIds.json');
const posts = require('../data/posts.json');
const searchResults = require('../data/search.json');
const tagIds = require('../data/tagIds.json');

const filterIncludesArray = (list, key, value) =>
  _filter(list, item => _includes(item[key], value));

const getPosts = ({author = '', tag = '', limit = 10, offset = 0}) => {
  let desiredPosts = posts;

  if (author) {
    const authorId = authorIds[author];

    desiredPosts = filterIncludesArray(desiredPosts, 'authors', authorId);
  }

  if (tag) {
    const tagId = tagIds[tag];

    desiredPosts = filterIncludesArray(desiredPosts, 'tags', tagId);
  }

  const count = desiredPosts.length;

  desiredPosts = _slice(desiredPosts, offset, offset + limit);

  return {count, posts: desiredPosts};
};

const getSearchResults = ({q = ''}) => {
  return _slice(matchSorter(searchResults, q, {keys: ['id', 'name']}), 0, 10);
};

module.exports = {
  getPosts,
  getSearchResults
};
