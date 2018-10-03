const _filter = require('lodash/filter');
const _find = require('lodash/find');
const _includes = require('lodash/includes');
const _map = require('lodash/map');
const _slice = require('lodash/slice');
const matchSorter = require('match-sorter');

const authors = require('../data/authors.json');
const tags = require('../data/tags.json');
const posts = require('../data/posts.json');
const searchResults = require('../data/search.json');

const filterIncludesArray = (list, key, value) =>
  _filter(list, item => _includes(item[key], value));
const getPosts = ({author = '', tag = '', limit = 10, offset = 0}) => {
  let desiredPosts = posts;

  if (author) {
    desiredPosts = filterIncludesArray(desiredPosts, 'authors', author);
  }

  if (tag) {
    desiredPosts = filterIncludesArray(desiredPosts, 'tags', tag);
  }

  const count = desiredPosts.length;

  desiredPosts = _slice(desiredPosts, offset, offset + limit);

  return {count, posts: desiredPosts};
};

const getAuthor = ({id}) => {
  return _find(authors, ['id', id]);
};

const getTag = ({id}) => {
  return _find(tags, ['id', id]);
};

const getAuthors = root => {
  return _map(root.authors, authorId => {
    return _find(authors, ['id', authorId]);
  });
};

const getSearchResults = ({q = ''}) => {
  return _slice(matchSorter(searchResults, q, {keys: ['id', 'name']}), 0, 10);
};

const getTags = root => {
  return _map(root.tags, tagId => {
    return _find(tags, ['id', tagId]);
  });
};

module.exports = {
  getAuthor,
  getAuthors,
  getPosts,
  getSearchResults,
  getTag,
  getTags
};
