import gql from 'graphql-tag';

export default gql`
  scalar JSON

  type Query {
    version: String
  }

  type Mutation {
    TODO: JSON
  }
`;
