import GraphQLJSON from 'graphql-type-json';

import {version} from '../package.json';

const Query = {
  version: () => version
};

const Mutation = {};

const JSON = GraphQLJSON;

export default {JSON, Mutation, Query};
