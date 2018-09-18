const serverPort = parseInt(process.env.PORT, 10) || 3000;
const apiHost = process.env.API_HOST || `http://localhost:${serverPort}`;
const apiUrl = `${apiHost}/graphql`;

module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {apiUrl, serverPort}
};
