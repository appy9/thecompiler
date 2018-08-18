const isDev = process.env.NODE_ENV !== 'production';
const parsedPort = parseInt(process.env.PORT, 10);
const serverPort = parsedPort ? parsedPort : 8080;
const apiHost =
  process.env.HOST || `http://localhost${serverPort ? `:${serverPort}` : ''}`;
const apiUrl = `${apiHost}/graphql`;

module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    apiUrl,
    isDev,
    serverPort
  }
};
