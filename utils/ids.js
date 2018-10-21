const _memoize = require('lodash/memoize');

const createId = item =>
  item
    .split(' ')
    .join('-')
    .toLowerCase();

const createReadableId = item =>
  item
    .split(' ')
    .join('-')
    .toLowerCase();

module.exports = {
  createId: _memoize(createId),
  createReadableId: _memoize(createReadableId)
};
