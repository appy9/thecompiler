const graphqlHTTP = require('express-graphql');
const {makeExecutableSchema} = require('graphql-tools');
const cors = require('micro-cors')();

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const dev = process.env.NODE_ENV !== 'production';
const schema = makeExecutableSchema({resolvers, typeDefs});
const handler = graphqlHTTP({schema, graphiql: dev});
const corsHandler = cors(handler);

module.exports = corsHandler;
