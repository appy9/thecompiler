const compression = require('compression');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {makeExecutableSchema} = require('graphql-tools');
const helmet = require('helmet');
const next = require('next');
const {default: getConfig} = require('next/config');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');
const {PAGE_AUTHOR, PAGE_TAG} = require('./utils/constants');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const {
  publicRuntimeConfig: {clientUrl, serverPort}
} = getConfig();
const schema = makeExecutableSchema({resolvers, typeDefs});

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

  // Graphql endpoint
  server.use('/graphql', graphqlHTTP({schema, graphiql: dev}));

  // Custom route handling for the app
  server.get('/authors/:id', (req, res) => {
    app.render(req, res, '/', {page: PAGE_AUTHOR});
  });

  server.get('/tags/:id', (req, res) => {
    app.render(req, res, '/', {page: PAGE_TAG});
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(serverPort, err => {
    if (err) throw err;
    console.log(`> serving at http://localhost:${serverPort}`);
  });
});
