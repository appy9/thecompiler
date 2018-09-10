const serverPort = parseInt(process.env.PORT, 10) || 3000;
const apiUrl = process.env.API_HOST || 'http://localhost:8080';

module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {apiUrl, serverPort}
};
