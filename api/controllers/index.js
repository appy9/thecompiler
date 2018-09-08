const _find = require('lodash/find');
const _map = require('lodash/map');
const _slice = require('lodash/slice');

const authors = require('../data/authors.json');
const tags = require('../data/tags.json');
const languages = require('../data/languages.json');
const posts = require('../data/posts.json');

const postLength = posts.length;

const findPosts = ({limit = 10, offset = 0}) => {
  const desiredPosts = _slice(posts, offset, offset + limit);

  return {count: postLength, posts: desiredPosts};
};

const findAuthor = ({id}) => {
  return _find(authors, ['id', id]);
};

const findLanguage = ({id}) => {
  return _find(languages, ['id', id]);
};

const findTag = ({id}) => {
  return _find(tags, ['id', id]);
};

const findAuthors = root => {
  return _map(root.authors, authorId => {
    return _find(authors, ['id', authorId]);
  });
};

const findLanguages = root => {
  return _map(root.languages, languageId => {
    return _find(languages, ['id', languageId]);
  });
};

const findTags = root => {
  return _map(root.tags, tagId => {
    return _find(tags, ['id', tagId]);
  });
};

module.exports = {
  findAuthor,
  findAuthors,
  findLanguage,
  findLanguages,
  findPosts,
  findTag,
  findTags
};
