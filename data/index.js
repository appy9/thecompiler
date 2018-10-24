const fs = require('fs');
const _ = require('lodash');
const log = require('npmlog');
const path = require('path');

const posts = require('./posts.json');
const {createDashDelimitedId} = require('../utils/ids');

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

// Order the keys, Order the list itself
const formattedPosts = _.orderBy(
  orderKeys(posts),
  ['date_published'],
  ['desc']
);

// Generate search data
const search = _.chain(formattedPosts)
  .reduce(
    (postResult, post) => {
      postResult.authors = [...postResult.authors, ...(post.authors || [])];
      postResult.tags = [...postResult.tags, ...(post.tags || [])];

      return postResult;
    },
    {authors: [], tags: []}
  )
  .reduce((searchResult, groupOfInfo, index) => {
    const groupOfResults = _.chain(groupOfInfo)
      .uniq()
      .reduce((result, authorOrTag) => {
        result.push({
          id: createDashDelimitedId(authorOrTag),
          name: authorOrTag,
          type: index
        });

        return result;
      }, [])
      .value();

    searchResult = [...searchResult, ...groupOfResults];

    return searchResult;
  }, [])
  .orderBy(['id'], ['asc'])
  .value();

/**
 * Generate trending data
 * Trending is defined as the most recent author or tag
 * to have 5 posts associated with it
 */
let trendDictionary = {authors: {}, tags: {}};
const trending = [];

_.forEach(formattedPosts, ({authors, tags}) => {
  const checkItems = (items, itemType) => {
    _.forEach(items, item => {
      if (trendDictionary[itemType][item]) {
        if (trendDictionary[itemType][item] === 4) {
          trending.push({
            id: createDashDelimitedId(item),
            name: item,
            type: itemType
          });
        }
        trendDictionary[itemType][item]++;
      } else {
        trendDictionary[itemType][item] = 1;
      }
    });
  };

  checkItems(authors, 'authors');
  checkItems(tags, 'tags');

  if (trending.length > 9) {
    return false;
  }
});

// Generate ids for lookup
const searchCategories = _.groupBy(search, item => item.type);
const createDictionary = (result, {id, name}) => {
  result[id] = name;

  return result;
};
const authorIds = _.reduce(searchCategories.authors, createDictionary, {});
const tagIds = _.reduce(searchCategories.tags, createDictionary, {});

// Save everything
const fileTypes = [
  {fileName: 'authorIds.json', data: authorIds},
  {fileName: 'tagIds.json', data: tagIds},
  {fileName: 'posts.json', data: formattedPosts},
  {fileName: 'search.json', data: search},
  {fileName: 'trending.json', data: trending}
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
