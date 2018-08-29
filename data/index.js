const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');
const log = require('npmlog');
const path = require('path');

const authors = require('./authors.json');
const categories = require('./categories.json');
const languages = require('./languages.json');
const posts = require('./posts.json');

// Check for duplicate uids
function hasDuplicatesIds(items) {
  const ids = _.map(items, ({id}) => id);

  return _.uniq(ids).length !== ids.length;
}

if (hasDuplicatesIds(authors)) {
  log.error('Authors with duplicate ids were found in authors.json');
  process.exit(1);
}

if (hasDuplicatesIds(categories)) {
  log.error('Categories with duplicate ids were found in categories.json');
  process.exit(1);
}

if (hasDuplicatesIds(languages)) {
  log.error('Languages with duplicate ids were found in languages.json');
  process.exit(1);
}

// Add dates to posts without dates
const now = moment.utc().toISOString();
let formattedPosts = _.map(posts, post => ({date_added: now, ...post}));

// Order and save everything
formattedPosts = _.orderBy(formattedPosts, ['date_added']);

const formattedAuthors = _.orderBy(authors, ['id']);
const formattedCategories = _.orderBy(categories, ['id']);
const formattedLanguages = _.orderBy(languages, ['id']);
const fileTypes = [
  {fileName: 'authors.json', data: formattedAuthors},
  {fileName: 'categories.json', data: formattedCategories},
  {fileName: 'languages.json', data: formattedLanguages},
  {fileName: 'posts.json', data: formattedPosts}
];

_.forEach(fileTypes, ({data, fileName}) => {
  const filePath = path.join('data', fileName);
  const stringData = JSON.stringify(data);

  fs.writeFile(filePath, stringData, function(err) {
    if (err) {
      log.error(`Error writing to ${filePath}`);
      log.error(err);
    }

    log.info(`Wrote file to ${fileName}`);
  });
});

// Build sitemap
