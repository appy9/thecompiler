const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const next = require('next');
const {default: getConfig} = require('next/config');

const {PAGE_AUTHOR, PAGE_LANG, PAGE_TAG} = require('./utils/constants');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const {
  publicRuntimeConfig: {clientUrl, serverPort}
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

  // Custom route handling for the app
  server.get('/authors/:id', (req, res) => {
    app.render(req, res, '/', {page: PAGE_AUTHOR});
  });

  server.get('/languages/:id', (req, res) => {
    app.render(req, res, '/', {page: PAGE_LANG});
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
