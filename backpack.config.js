module.exports = {
  webpack: (config, options, webpack) => {
    const entry = `${__dirname}/server.js`;

    config.entry.main = [entry];
    return config;
  }
};
