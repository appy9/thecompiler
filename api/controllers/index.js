const _find = require('lodash/find');
const _map = require('lodash/map');
const _slice = require('lodash/slice');
const matchSorter = require('match-sorter');

const authors = require('../data/authors.json');
const tags = require('../data/tags.json');
const languages = require('../data/languages.json');
const posts = require('../data/posts.json');
const searchResults = require('../data/search.json');

const postLength = posts.length;

const getPosts = ({limit = 10, offset = 0}) => {
  const desiredPosts = _slice(posts, offset, offset + limit);

  return {count: postLength, posts: desiredPosts};
};

const getAuthor = ({id}) => {
  return _find(authors, ['id', id]);
};

const getLanguage = ({id}) => {
  return _find(languages, ['id', id]);
};

const getTag = ({id}) => {
  return _find(tags, ['id', id]);
};

const getAuthors = root => {
  return _map(root.authors, authorId => {
    return _find(authors, ['id', authorId]);
  });
};

const getLanguages = root => {
  return _map(root.languages, languageId => {
    return _find(languages, ['id', languageId]);
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
  getLanguage,
  getLanguages,
  getPosts,
  getSearchResults,
  getTag,
  getTags
};
