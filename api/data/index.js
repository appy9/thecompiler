const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');
const log = require('npmlog');
const path = require('path');

const authors = require('./authors.json');
const languages = require('./languages.json');
const posts = require('./posts.json');
const tags = require('./tags.json');

// Check for duplicate uids
function hasDuplicatesIds(items) {
  const ids = _.map(items, ({id}) => id);

  return _.uniq(ids).length !== ids.length;
}

if (hasDuplicatesIds(authors)) {
  log.error('Authors with duplicate ids were found in authors.json');
  process.exit(1);
}

if (hasDuplicatesIds(languages)) {
  log.error('Languages with duplicate ids were found in languages.json');
  process.exit(1);
}

if (hasDuplicatesIds(tags)) {
  log.error('tags with duplicate ids were found in tags.json');
  process.exit(1);
}

/**
 * Order the keys in an object
 * @param  {Array} list to order
 * @return {Array} the new list
 */
const orderKeys = list =>
  _.chain(list)
    .map(item =>
      _.chain(item)
        .keys()
        .sort()
        .reduce((result, key) => {
          result[key] = item[key];

          return result;
        }, {})
        .value()
    )
    .value();

/**
 * Add a type to the list of items
 * @param  {Array}  list to order
 * @param  {String} type the type to add to the items
 * @return {Array}  the new list
 */
const addType = (list, type) => _.map(list, item => ({...item, type}));

// Add dates to posts without dates
const now = moment.utc().toISOString();
let formattedPosts = _.map(posts, post => ({date_added: now, ...post}));

// Add types, Order the keys, Order the lists themesleves
formattedPosts = _.orderBy(orderKeys(addType(formattedPosts, 'post')), [
  'date_added'
]);

let formattedAuthors = _.orderBy(orderKeys(addType(authors, 'author')), ['id']);
let formattedLanguages = _.orderBy(orderKeys(addType(languages, 'language')), [
  'id'
]);
let formattedTags = _.orderBy(orderKeys(addType(tags, 'tag')), ['id']);

// Generate search data
const search = _.chain([...authors, ...languages, ...tags])
  .map(({id, name, type}) => ({id, name, type}))
  .uniqBy('id')
  .orderBy('id')
  .value();

// Save everything
const fileTypes = [
  {fileName: 'authors.json', data: formattedAuthors},
  {fileName: 'languages.json', data: formattedLanguages},
  {fileName: 'posts.json', data: formattedPosts},
  {fileName: 'tags.json', data: formattedTags},
  {fileName: 'search.json', data: search}
];

_.forEach(fileTypes, ({data, fileName}) => {
  const filePath = path.join(__dirname, fileName);
  const stringData = JSON.stringify(data);

  fs.writeFile(filePath, stringData, function(err) {
    if (err) {
      log.error(`Error writing to ${filePath}`);
      log.error(err);
      process.exit(1);
    }

    log.info(`Wrote file to ${fileName}`);
  });
});