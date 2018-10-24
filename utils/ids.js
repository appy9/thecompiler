const _memoize = require('lodash/memoize');

const createDashDelimitedId = item =>
  item
    .split(' ')
    .join('-')
    .toLowerCase();

module.exports = {
  createDashDelimitedId: _memoize(createDashDelimitedId)
};
