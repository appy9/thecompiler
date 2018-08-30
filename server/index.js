const compression = require('compression');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const helmet = require('helmet');
const next = require('next');
const {default: getConfig} = require('next/config');

const schema = require('../graphql/schema');
const {PAGE_AUTHOR} = require('../utils/constants');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const {
  publicRuntimeConfig: {clientUrl, isDev, serverPort}
} = getConfig();

app.prepare().then(() => {
  const server = express();

  // Set assets prefix
  if (clientUrl) {
    app.setAssetPrefix(clientUrl);
  }

  // Helmet for headers
  server.use(helmet());

  // Compression
  server.use(compression());

  // Static files
  server.use(express.static('static'));

  // GraphQL
  server.use('/graphql', graphqlHTTP({schema, graphiql: isDev}));

  // Custom route handling for the app
  server.get('/author/:author', (req, res) => {
    app.render(req, res, '/', {page: PAGE_AUTHOR});
  });

  // Pages to error for
  // server.get('/', (req, res) => {
  //   app.render(req, res, '/_error');
  // });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(serverPort, err => {
    if (err) throw err;
    console.log(`> serving at http://localhost:${serverPort}`);
  });
});
